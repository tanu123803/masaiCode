const mongoose = require("mongoose");

const connectToDb = ()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/ForumApi")
        console.log("connect to db")
        
    } catch (error) {
        res .status(500).json({msg:"havong issue in fetching the data"})
        console.log("having error in fetching the data")
        
    }
}

module.exports = connectToDb