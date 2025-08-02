const express=require("express");
const route=express.route();
const order=require('../model/orderRoute');


router.post("./"async(req,res)=>{
    const order = await order.create(req.body);
    res.json(order)
});

router.get("./"async(req,res)=>{
    const order=await order.find();
    res.json(product)
});


router.delete("./:id",async(req,res)=>{
    await order.findByIdAndDelete(req.param.id)
    res.json({message:`order has been deleted`})
})


module.export=router