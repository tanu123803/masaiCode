
const fs=require("fs")
const express=require("express");
const courseRoute=require("./routes/course.route");









const app=express();

app.use(express.json());



///ALL THIS IS FOR THE COURSE ROUTE

app.get("/test",(req,res)=>{
    res.send({msg:"this is a test route"})
})

app.use("/courses",courseRoute)

app.use("*",(req,res)=>{
    res.status(404).json({msg:"404 route is  not found"})
})
//get request read all the data




app.listen(3000,()=>{
    console.log("server is running on the port 3000");
})