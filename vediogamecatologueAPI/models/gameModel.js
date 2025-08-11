const mongoose =require("mongoose");

const gameSchema = new mongoose.Schema({
    title: {type:String,
        required:true},
    genre: {type:String,
        required:true,
        enum:['RPG', 'Action', 'Adventure', 'Strategy',]}  ,
    releaseDate: {type:Date,
        requireed:true,},
    publisher: {type:mongoose.Schema.Types.ObjectId,
        
        ref:Publisher,required:true}

})

module.exports=mongoose.model(gameSchema)