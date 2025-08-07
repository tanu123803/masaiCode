const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to DB"))
.catch((err) => console.log("DB Error:", err));


const userRouter = require('./routes/user.route');
app.use('/users', userRouter);


app.listen(8080, () => {
  console.log("Server running on port 8080");
});
