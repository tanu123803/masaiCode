const express=require("express");\
const mongoose=require("mongoose");

constProductroutes=require(`./routes/productroutes`)
constUerroutes=require(`./routes/productroutes`)
constOrderroutes=require(`./routes/productroutes`)

const app=express();
app.use(express.json());


mongoose.connect("mongoose")





app.listen(3000,()=>{
    console.log("serber is running oon the port 3000")
})
