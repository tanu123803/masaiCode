const mongoose =require("mongoose");

const publisherSchema = new mongoose.Schema({
    name: {type :String,
        required:true,
        unique},
    location: "String",
    yearEstablished:number

})

module.exports=mongoose.model(publisherSchema)