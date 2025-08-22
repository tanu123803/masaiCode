const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name :String,
    age :{type:Number, min:20, max:100},
    email :{type:String,required:true,unique:true},
    password:{type:String,default:"pass123"},
    gender:{type:String,enum:["male","female"]},
    address:[{//nested document document inside the document
        houseno:{type:String,required:true},
        area:{type:String,required:true},
        landmark:String,
        State:{type:String,required:true},
        pincode:{type:Number,required:true},
        mobileNumber:{type:Number,required:true}
    }]
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel;