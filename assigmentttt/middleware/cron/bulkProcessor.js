const cron = require('node-cron');
const redisClient = require('../redisClient');
const Book = require('../models/Book');



 
function startBulkCron() {
  
  cron.schedule('*/2 * * * *', async () => {
    console.log('⏱️ [cron] bulk processor started at', new Date().toISOString());
    try {
      
      for await (const key of redisClient.scanIterator({ MATCH: 'bulk:user:*', COUNT: 100 })) {
        try {
          
          const parts = key.split(':');
          const userId = parts[2];
          console.log('⏳ processing bulk queue for user', userId, 'key:', key);

          // read all items
          const items = await redisClient.lRange(key, 0, -1); 
          if (!items || items.length === 0) {
            
            await redisClient.del(key);
            continue;
          }

          
          const docs = items.map(s => {
            const obj = JSON.parse(s);
            return { ...obj, user: userId };
          });

          
          if (docs.length > 0) {

            const res = await Book.insertMany(docs, { ordered: false });
            console.log(`✅ inserted ${res.length} books for user ${userId}`);
          }
          await redisClient.del(key);
          console.log(`🧹 cleared bulk key ${key}`);
          const cacheKey = `books:user:${userId}`;
          await redisClient.del(cacheKey);
          console.log(`🧹 invalidated cache ${cacheKey}`);
        } catch (userErr) {
          console.error('Error processing a user bulk queue:', userErr);
          
        }
      }
    } catch (err) {
      console.error('Cron error:', err);
    } finally {
      console.log('⏱️ [cron] bulk processor finished at', new Date().toISOString());
    }
  }, {
    scheduled: true,
    timezone: 'UTC' 
  });

  console.log('✅ Bulk cron scheduled (every 2 minutes)');
}

module.exports = startBulkCron;
