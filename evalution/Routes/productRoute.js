const express=require("express");
const route=express.route();
const product=require('../model/productRoute');


router.post("./"async(req,res)=>{
    const product = await product.create(req.body);
    res.json(product)
});

router.get(""./"async(req,res)=>{
    const product=await product.find();
    res.json(product)
});

router.put(`./`:id,async(req,res)=>{
    const update=await
    product.findBYIDAndUpdate(req.params.id,req.body{new=true})
    res.json(updated)
    })


router.delete("./":id,async(req,res)=>{
    await product.findByIdAndDelete(req.param.id)
    res.json({message:`product has been deleted`})
})


module.export=router