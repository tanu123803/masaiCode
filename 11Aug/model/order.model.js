const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
        orderName:{type:String, require:true},
        orderAmount:{type:Number,require:true},
        deliveryStatus:{type:Boolean,default:false},
        modeofpayment:{type:String,enum:["COD","UPI","NetBanking","Debitcard","Creditcard","Gitcard"]},
        orderedBy : {type:mongoose.Schema.Types.ObjectId,ref:"user"}//this should be the userid from the user cilllection
//establish a relationship with the user collection/schema

})

const orderModel =mongoose.model("order",OrderSchema);

module.exports = orderModel