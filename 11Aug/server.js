const express = require("express");
const connectedToDb = require("./configs/mongodb.config");
const UserRouter = require("./routes/user.routes");
const OrderRouter = require("./routes/order.routes");
const lmsRouter = require("./routes/lms.routes");
require('dotenv').config()
const PORT = process.env.PORT||3000
const app = express();
app.use(express.json())
connectedToDb();


app.get("/test",(req,res)=>{
    res.status(200).json({msg:"this is a test route"})
})
//user router
app.use("/users",UserRouter)
//order router 
app.use("/order",OrderRouter)
//LMS ROUTER
app.use("/lms",lmsRouter)

app.use((req,res)=>{
    res.status(400).json({msg:"this request is not found"})
})


app.listen(PORT,()=>{
    console.log("server is running on the port 3000")
})