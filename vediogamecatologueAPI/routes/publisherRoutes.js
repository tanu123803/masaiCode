const express=require("express");
const publisherRouter = express.Router();

publisherRouter.get("\all-publisher",(req,res)=>{
    res.status(200).json({msg:"getting all the publisher" })
})
publisherRouter.post("/add-publisher",(req,res)=>{
    res.status(200).json({msg:"adding" })
})
publisherRouter.patch("/update-publisher",(req,res)=>{
    res.status(200).json({msg:"update all the publisher" })
})
publisherRouter.put("/update-publisher,id:",(req,res)=>{
    res.status(200).json({msg:"update all the publisher" })
})
publisherRouter.delete("/delete",(req,res)=>{
    res.status(500).json({msg:"all deleted" })
})

module.exports = publisherRouter