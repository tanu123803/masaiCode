const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
    name: {type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true,unique:true},
    age:{type:Number,min:20,max:100},
    gender:String,
}) 

const UserModel = mongoose.model("user",userSchema);
module.exports = UserModel