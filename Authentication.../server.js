const express = require("express");
const connectTodb = require("./configs/mongodb.config");
const UserRouter = require("./routes/user.routes");
const todoRouter = require("./routes/todo.router");
require("dotenv").config();
const PORT = process.env.PORT||3000;
const app = express();
app.use(express.json())
connectTodb




app.get("/test",(req,res)=>{
    try {
        res.status(200).json({msg:"this is a test route"})
        
    } catch (error) {
        res.status(500).json({msg:"having issue in facing in fetching the data"})
    }
})
app.use("/user",UserRouter)

app.use("/todo",todoRouter)
//handling undefined route 
app.use((req,res)=>{
    try {
        res.status(200).json({msg:"this req is undefied "})
        
    } catch (error) {
        res.status(500).json({msg:"having issue in facing in fetching the data"})
    }

})

app.listen(PORT,()=>{
    console.log("server started")
})