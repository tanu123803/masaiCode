const express = require('express');
const router = express.Router();
const redisClient = require('../redisClient');
const db = require('../db');

const CACHE_KEY = 'items:all';
const CACHE_TTL_SECONDS = 60; // 1 minute

// GET /items -> try Redis first
router.get('/', async (req, res) => {
  try {
    const cached = await redisClient.get(CACHE_KEY);
    if (cached) {
      console.log('🔁 Cache hit:', CACHE_KEY);
      return res.json(JSON.parse(cached));
    }

    console.log('⚠️ Cache miss:', CACHE_KEY);
    const data = db.getAll();
    // cache with TTL
    await redisClient.setEx(CACHE_KEY, CACHE_TTL_SECONDS, JSON.stringify(data));
    console.log(`💾 Cached ${CACHE_KEY} for ${CACHE_TTL_SECONDS}s`);
    res.json(data);
  } catch (err) {
    console.error('GET /items error:', err);
    res.status(500).json({ error: 'server error' });
  }
});

// POST /items -> add item + invalidate cache
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'name required' });

    const item = db.add({ name });
    // invalidate cache
    await redisClient.del(CACHE_KEY);
    console.log('🧹 Cache invalidated:', CACHE_KEY);
    res.status(201).json(item);
  } catch (err) {
    console.error('POST /items error:', err);
    res.status(500).json({ error: 'server error' });
  }
});

// PUT /items/:id -> update item + invalidate cache
router.put('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const updated = db.update(id, req.body);
    if (!updated) return res.status(404).json({ error: 'not found' });

    await redisClient.del(CACHE_KEY);
    console.log('🧹 Cache invalidated:', CACHE_KEY);
    res.json(updated);
  } catch (err) {
    console.error('PUT /items/:id error:', err);
    res.status(500).json({ error: 'server error' });
  }
});

// DELETE /items/:id -> delete item + invalidate cache
router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const ok = db.remove(id);
    if (!ok) return res.status(404).json({ error: 'not found' });

    await redisClient.del(CACHE_KEY);
    console.log('🧹 Cache invalidated:', CACHE_KEY);
    res.status(204).end();
  } catch (err) {
    console.error('DELETE /items/:id error:', err);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
