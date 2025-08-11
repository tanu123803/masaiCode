const mongoose = require("mongoose") ;

const connectToDb = async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mongoosetest");
        console.log("connect to db")
        
    } catch (error) {
        console.log("Having error in connecting the databse");
        console.log("err")
        
    }
    

}

module.exports = connectToDb;