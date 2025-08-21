const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
    name: {type:String,
        require:true,
        unique:true}
})

const TagModel = mongoose.model("Tag",(TagSchema))

module.exports = TagModel;