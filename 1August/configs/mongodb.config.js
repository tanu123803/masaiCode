const mongoose = require("mongoose");

const connectToDb = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/testdata")
        console.log("connection to db")
        
    } catch (error) {
        console.log("facing issue in connecting with db")
        
    }
}

module.exports = connectToDb;