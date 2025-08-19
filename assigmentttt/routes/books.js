const express = require('express');
const Book = require('../models/Book');
const auth = require('../middlewares/auth');
const redisClient = require('../redisClient');
const router = express.Router();


const CACHE_TTL = Number(process.env.CACHE_TTL_SECONDS) || 60;


function booksCacheKey(userId) {
  return `books:user:${userId}`;
}
function bulkKey(userId) {
  return `bulk:user:${userId}`;
}


router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const key = booksCacheKey(userId);
    const cached = await redisClient.get(key);
    if (cached) {
      console.log('🔁 Cache hit for', key);
      return res.json(JSON.parse(cached));
    }

    console.log('⚠️ Cache miss for', key);
    const books = await Book.find({ user: userId }).lean();
   
    await redisClient.setEx(key, CACHE_TTL, JSON.stringify(books));
    console.log(`💾 Cached ${key} for ${CACHE_TTL}s`);
    res.json(books);
  } catch (err) {
    console.error('GET /books error', err);
    res.status(500).json({ message: 'server error' });
  }
});


router.post('/', auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { title, author, publishedYear } = req.body;
    if (!title) return res.status(400).json({ message: 'title required' });

    const book = await Book.create({ user: userId, title, author, publishedYear });

    await redisClient.del(booksCacheKey(userId.toString()));
    console.log('🧹 invalidated cache for', booksCacheKey(userId.toString()));
    res.status(201).json(book);
  } catch (err) {
    console.error('POST /books error', err);
    res.status(500).json({ message: 'server error' });
  }
});


router.put('/:id', auth, async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const id = req.params.id;
    const book = await Book.findOneAndUpdate({ _id: id, user: userId }, req.body, { new: true });
    if (!book) return res.status(404).json({ message: 'not found or not your book' });

    await redisClient.del(booksCacheKey(userId));
    console.log('🧹 invalidated cache for', booksCacheKey(userId));
    res.json(book);
  } catch (err) {
    console.error('PUT /books/:id error', err);
    res.status(500).json({ message: 'server error' });
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const id = req.params.id;
    const deleted = await Book.findOneAndDelete({ _id: id, user: userId });
    if (!deleted) return res.status(404).json({ message: 'not found or not your book' });

    await redisClient.del(booksCacheKey(userId));
    console.log('🧹 invalidated cache for', booksCacheKey(userId));
    res.status(204).end();
  } catch (err) {
    console.error('DELETE /books/:id error', err);
    res.status(500).json({ message: 'server error' });
  }
});


router.post('/bulk', auth, async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const items = req.body.books;
    if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ message: 'books array required' });

    const key = bulkKey(userId);

    
    const multi = redisClient.multi();
    for (const b of items) {
      
      if (!b.title) continue; 
      multi.rPush(key, JSON.stringify(b));
    }
    
    multi.expire(key, 60 * 60 * 24); 
    await multi.exec();

    console.log(`📥 queued ${items.length} books for user ${userId} under ${key}`);

    res.json({ message: 'Books will be added later.' });
  } catch (err) {
    console.error('POST /books/bulk error', err);
    res.status(500).json({ message: 'server error' });
  }
});

module.exports = router;
