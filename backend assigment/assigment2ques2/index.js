const express = require("express")

const app = express();

app.get("/home",(req,res)=>{
    res.status(200).send("this is a home page");
})
app.get("/contactus",(req,res)=>{
     res.status(200).send("contact us at contact@contact.com");
})



app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})