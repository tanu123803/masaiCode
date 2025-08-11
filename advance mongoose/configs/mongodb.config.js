const mongoose = require ("mongoose");


const connectToDb = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mydatabase");
        console.log("connected to db")
        
    } catch (error) {
        console.log("having error in facing the data")
        
    }
    
}
module.exports = connectToDb;