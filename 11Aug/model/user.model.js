const mongoose = require("mongoose");

//nested schema
// const OrderSchema = new mongoose.Schema({
//         orderNmae:{type:String, require:true},
//         orderAmount:{type:Number,require:true},
//         deliveryStatus:{type:Boolean,default:false},
//         modeofpayment:{type:String,enum:["COD","UPI","NetBanking","Debitcard","Creditcard","Gitcard"]}

//})
const addressSchema = new mongoose.Schema({
        houseno:{type:String,required:true},
        area:{type:String,required:true},
        landmark:String,
        state:{type:String,required:true},
        pincode:{type:Number,required:true},
        mobileNumber:{type:Number,required:true}

})
//-------------- thse all  are the part of the complex schema


//main schema

const userSchema = new mongoose.Schema({
    name :String,
    age :{type:Number, min:20, max:100},
    email :{type:String,required:true,unique:true},
    //password:{type:String,default:"pass123"},
    gender:{type:String,enum:["male","female"]},
    //orders:[ ],//embeded  document 
    address:[addressSchema]
    
})


const userModel = mongoose.model("user",userSchema)

module.exports = userModel;