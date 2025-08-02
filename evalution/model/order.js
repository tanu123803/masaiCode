
const mongoose=require("mongoose");

const orderSchema= new mongoose.Schema({
    userid:Number,
    Product:String,
    ProductID:Number,
    Quantity:Number,
    totalAmount:Number


})

module.exports=mongoose.model("order",orderSchema)