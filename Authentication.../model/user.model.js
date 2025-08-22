const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : String,
    email :{type:String, require:true, unique:true},
    password:{type:String,required:true}
})

const Usermodel = mongoose.model("User",userSchema);
module.exports = UserModel