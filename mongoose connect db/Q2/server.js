//create basic express app
//create schema and model

const express = require("express");
const connectToDb = require("./Configs/mongodb.config");
const userRoutes = require("./routes/user.routes");
const app = express();

app.use(express.json());


app.use("/users",userRoutes)


app.listen(3000,()=>{
    console.log("server is started")
})
//step 2 connect mongodb with nodejs throgh mongoose 
connectToDb();