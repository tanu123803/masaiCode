const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Username:{type:String ,
        require:true,
        unique:true},
    email:{type:String,
        require:true,
        unique:true},
    password:{type:String,
        require:true,
        unique:true},
    role: {type:String,require:true,
        enum:[admin ,
            user,Moderator],
            default:true}

})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;