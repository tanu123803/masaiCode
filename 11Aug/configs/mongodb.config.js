const mongoose = require("mongoose");
require('dotenv').config();

const connectedToDb = async()=>{
    try {
        await  mongoose.connect(process.env.MONGO_URI)
        console.log(process.env.MONGO_URI)
         console.log("connected to db")
        
    } catch (error) {

        console.log("having issue with the fetching the data")
        
    }
}

module.exports = connectedToDb;