const express = require("express");
const connectToDb = require("./config/mongodb.config");
 require("dotenv").config();
const PORT = process.env.PORT||3000;
const bcrypt = require('bcrypt');
const postRouter = require("./Router/post.router");
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const app = express();
app.use(express.json())
connectToDb();

app.use("post",postRouter)



app.get("/test",(req,res)=>{
    res.status(200).json({msg:"all the test   route is here "})
})

app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})
 