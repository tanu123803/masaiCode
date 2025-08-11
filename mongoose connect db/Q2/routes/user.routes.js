const express = require("express");
const UserModel = require("../model/user.model");

const userRoutes = express.Router();
  //get all user from user collection 
userRoutes.get("/",async (req,res)=>{
    //find all the document present in the usercollection through usercollection 
     //retrive all the document from user collection 
     try {
        let user =  await UserModel.find({})
        res.status(200).json({msg : "userlist" ,user})
        
     } catch (error) {
        res.status(500).json({msg :"something went wrong please try  again later"})
        
     }    
})
//add user into user collection 
userRoutes.post("/add-user",(req,res)=>{
    
    res.send("user added")

})

module.exports = userRoutes