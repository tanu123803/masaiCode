const express=require("express");
const route=express.route();
const user=require('../model/UserRoute');


router.post("./"async(req,res)=>{
    const User= await User.create(req.body);
    res.json(User)
});

router.get("./"async(req,res)=>{
    const User=await User.find();
    res.json(User)
});



module.export=router