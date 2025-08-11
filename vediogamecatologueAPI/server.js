const express = require("express");
const mongoose =require("mongoose");
const app = express();



app.listen(3000,(req,res)=>{
    res.send("server is running on the port 3000")
})