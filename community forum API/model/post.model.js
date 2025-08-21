const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{type:String,
        require:true,
        unique:true,
        minlength:5},
    content:{type:String,
        require:true,
        minlength:20},
    author:{type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true },
    tags:[
        {type:mongoose.Schema.Types.ObjectId,
            ref:"Tag"}
    ],
    upvotes:[{type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        default:[]}],
    comments: [{types:mongoose.Schema.Types.ObjectId,
        ref:"User"},
        text:{type:String,
            require:true},
        createdAt:{type:Date,
            default:Date.now

        }
    ]
    

})

let postModel = mongoose.model("Post",postSchema):

module.exports = postModel;