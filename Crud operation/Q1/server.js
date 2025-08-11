const express=require("express");

const app=express();
app.use(express.json());

app.get("/test",(req,res)=>{
    res.send("this is a test route")
})
app.get("/test1",(req,res)=>{
    res.send({msg:"this is a test 1 route"})
})
//json
app.get("/test2",(req,res)=>{
    res.json({msg:"this is a test 2 router data"})
})




app.post("/add-data",(req,res)=>{
    console.log(req.body)
    res.send("add data")
})
app.put("/update-data",(req,res)=>{
    res.send("data updated")
})
app.delete("/delete-data",(req,res)=>{
    res.send("data has been permanently deleted")
})


app.listen(3000,()=>{
    console.log("server is running on the port 3000")
})