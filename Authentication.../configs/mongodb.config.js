const mongoose = require("mongoose");

const connectTodb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connect to db")
        
    } catch (error) {
        console.log("failed to connect")
        
    }
}


module.exports = connectTodb