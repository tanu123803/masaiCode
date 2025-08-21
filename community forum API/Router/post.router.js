const express = require("express");
const userModel = require("../model/user.model");
const postRouter = express.Router();




postRouter.get("/get-post",async(req,res)=>{
    try {
        let post=await userModel.find(user)
        res.status(200).json({msg:" getting all the post"})

        
    } catch (error) {
        res.status(500).json({msg:"having issue with fetching the data"})
        
    }
})


postRouter.post("/add-post",async(req,res)=>{
    try {
        let post = await userModel.create(req.body);
        res.status(200).json({msg:"new user has been created to the port"})
    } catch (error) {
        res.status(500).json({msg:"something went wrong ,please try again later"})
        
    }
})
postRouter.patch("/update-post/:userId",async(req,res)=>{
    const{postId} = req.params
    try {
        let post = await userModel.findById(postId);
        if(!user){
            return res.status(400).json({msg:"post not found"})
        }else{
            user.address.push(req.body)
            console.log(user.address)
            await post.save()
            res.status(201).json({msg:"new post has been updated successfully"})
        }
        
    } catch (error) {
        res.status(500).json({msg:"something went wrong ,please try again later"})
        
    }
})
postRouter.delete("/delete",async(req,res)=>{
    try {
        let user = await userModel.delete(req.body);
        res.status(200).json({msg:"new user has been created to the port"})
    } catch (error) {
        res.status(500).json({msg:"something went wrong ,please try again later"})
        
    }
})


module.exports = postRouter