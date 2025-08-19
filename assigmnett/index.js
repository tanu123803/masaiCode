const express = require('express');
const redisClient = require('./redisClient');
const itemsRouter = require('./routes/items');

const app = express();
app.use(express.json());

app.use('/items', itemsRouter);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await redisClient.connect();
    console.log('✅ Connected to Redis');
    app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Failed to start app', err);
    process.exit(1);
  }
})();
