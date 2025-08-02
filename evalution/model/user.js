 const mongoose=require("mongoose")

 const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    address:String,

 })


 module.export=mongoose.model("user",userSchema)