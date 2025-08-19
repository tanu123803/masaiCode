require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const redisClient = require('./redisClient');
const authRoutes = require('./routes/auth');
const booksRoutes = require('./routes/books');
const startBulkCron = require('./cron/bulkProcessor');

const app = express();
app.use(express.json());

// routes
app.use('/auth', authRoutes);
app.use('/books', booksRoutes);

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    // connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('✅ Connected to MongoDB');

    // connect to Redis
    await redisClient.connect();
    console.log('✅ Connected to Redis');

    // start cron for bulk processing (non-blocking)
    startBulkCron();

    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
}

start();
