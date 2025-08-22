const express = require("express");
const userModel = require("../model/user.model");



const UserRouter = express.Router();


UserRouter.post("/add-user",async(req,res)=>{
    //name email and gender is coming from the req.body
    //that should we added db through usermodel

    try {
        let user= await userModel.create(req.body);
        res.status(200).json({msg:"user create",user})
        
    } catch (error) {
        res.status(500).json({msg:"something went wrong please try again later"})
        
    }



})
UserRouter.patch("/add-address/:userId",async(req,res)=>{
    //address is coming from the req .body
    // i need id for reference ,so the user id should be passed as params
    // find the user by user id 
    //push the new address into ddress array present present in the user document 
    //save the user 
    const {userId}=req.params;
    try {
        let user =await userModel.findById(userId)
        if(!user){
            return res.status(404).json({msg:"user not found"})
        }else{
            user.address.push(req.body)
            // await user.save();
            console.log(user.address)
            await user.save();
            res.status(201).json({msg:`new added added to the userdata ${user.name}`})
        }
        
    } catch (error) {
        res.status(500).json({msg:"something went wrong please try again later"})
        
    }
})

// all female user less than the age of 30
UserRouter.get("/analytics/flt30",async(req,res)=>{
    let user = await userModel.find({$and:[{gender:"female"},{age:{$lte:30}}]},{name:1,age:1,gender:1})
    res.json(user)

})
//users from the delhi and karnatka ddistrict
UserRouter.get("/analytics/ufdb",async(req,res)=>{
    let user = await userModel.find({"address.state":{$in:["delhi","karnataka"]}})
    res.json(user)

})


module.exports = UserRouter;