const express = require("express");
const userModel = require("../model/user.model");

const intractionRoutes = express.Router();

intractionRoutes.get("/get-all",async(req,res)=>{
    try {
        let user = await userModel.create(req.body)
        res.status(200).json({msg:"getting all the rooutes successfully"})

        
    } catch (error) {
        res.status(500).json({msg:"having issue in fetching the data"})
        
    }
})
