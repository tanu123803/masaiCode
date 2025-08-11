
const express=require("express");
const GameRouter = express.Router();

GameRouter.get("\all-games",(req,res)=>{
    res.status(200).json({msg:"getting all the publisher" })
})
GameRouter.post("/add-games",(req,res)=>{
    res.status(200).json({msg:"adding" })
})
GameRouter.patch("/update-games",(req,res)=>{
    res.status(200).json({msg:"update all the publisher" })
})
GameRouter.put("/update-games,id:",(req,res)=>{
    res.status(200).json({msg:"update all the publisher" })
})
GamerRouter.delete("/delete",(req,res)=>{
    res.status(500).json({msg:"all deleted" })
})

module.exports = GameRouter