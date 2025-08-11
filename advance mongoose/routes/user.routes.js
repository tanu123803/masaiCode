const express = require("express");
const UserModel = require("../model/user.model");

const UserRouter = express.Router();

UserRouter.post("/add-user",async (req,res)=>{
    //name,age,email,gender,comign from there.body;
    //that should be added in db thorughusermodel
    try {
        let user = await UserModel.create(req.body)
    res.status(200).json({msg:"user has been created succesfully"})
        
    } catch (error) {
        console.log("having error in fetching the data")
        res.status(500).json({msg:"Someting went wrong,plaese try again later"})
    }   
})
UserRouter.patch("/update-address",async(req,res)=>{
    //address is coming from req .body
    // I need userId as ref,userId should be passed as path params
    //find the user by id 
    //push the address array into array present into the user document 
    //save the user 
    const {userId}=req.params;
    try {
        let user = await UserModel.findById(userId)
        if(!user){
            res.status(404).json({msg:"user not found..."})
        }else{
            user.address.push(req.body)
            console.log(user.address)
            await user.save()
            res.status(201).json({msg:"new address added in the database"})
        }
        
    } catch (error) {
        
    }

})



module.exports = UserRouter