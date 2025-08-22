const express = require("express");
const orderModel = require("../model/order.model");

const OrderRouter = express.Router();


//cursor method
OrderRouter.get("/data",async(req,res)=>{
    
        const {page,limit,sort,order} = req.query;
        //for pagination ,skip = (page-1)*limit
        let paginatevalue = (page-1)*limit||0;
        let limitingValue = limit || 0;
        let sortingvalue = sort || "OrderName"
        let orderValue = order=="asc"? 1:-1
        let orders = await orderModel.find().skip(paginatevalue).limit(limitingValue).sort({[sortingvalue]:limitingValue})
        res.json({orders})
    
})


OrderRouter.post("/add-order/:userId",async(req,res)=>{
    //order amount,name,delivery status,mode of payment,order by coming  from req.body
    try {
        let order = await orderModel.create(req.body);
        res.status(201).json({msg:"order created",orderdetails:order})
        
    } catch (error) {
        res.status(500).json({msg:"something went wrong"})
        
    }
})


OrderRouter.get("/:userId",async(req,res)=>{
    // all the orders of userid
    const{userId} = req.params
    // getting user  details and also user orders 
    try {
        let order = await orderModel.find({orderedBy:userId}).populate("orderedby","name")
        res.status(200).json({msg:"order list",orders})
        
    } catch (error) {
         res.status(500).json({msg:" something went wrong please try again later after sometime "})
        
    }
})

OrderRouter.patch("/update-orders/:orderId",async(req,res)=>{
    //order id coming from the params
    //updated data coming from the req.body
    // i will update user without touching user , because order is seprate entity independed inityt from the user 
    try {
        const{orderid} = req.params;
        let orders = await orderModel.findByIdAndUpdate(orderid,req.body,{new:true})
        res.status(201).json({msg:"order has been updated succesfully",details:order})
        
    } catch (error) {
        res.status(500).json({msg:"having issue in updating the data"})
        
    }
})

OrderRouter.delete("/delete-orders/:orderId",async(req,res)=>{
    try {
        const{orderid} = req.params;
        let orders = await orderModel.findByIdAndDelete(orderid,req.body,{new:true})
        res.status(200).json({msg:"order has been deleted succesfully",details:orders})
        
    } catch (error) {
        res.status(500).json({msg:"having issue in updating the data"})
        
    }
})
module.exports = OrderRouter;