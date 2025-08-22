//step 1 basix express setup
//step 2connecting mongodb with nodejs
//step 3 creating schema and model
//step 4 create routes/controllers and test in postman
const express = require("express");
const connectToDb = require("../configs/mongodb.config");
const UserRouter = require("../routes/user.routes");

const app = express();
app.use(express.json())
connectToDb();



app.get("/test",(req,res)=>{
    res.status(200).json({msg:"this is a test route"})
})
//user router
app.use("/users",UserRouter)

app.use((req,res)=>{
    res.status(400).json({msg:"this request is not found"})
})



app.listen(3000,()=>{
    console.log("server is running in the port 3000")
})