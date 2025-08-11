
const express =require("express");
const app=express();

app.use(express.json())


app.get("./test",(res,res)=>{
    res.send("this is a test route")
})

app.post("./add-data",(req,res)=>{
    res.send("data added ")
})

app.put("./update-data",(req,res)=>{
    res.send("data updated")
})
app.delete("./delete",(req,res)=>{
    res.send("data deleted")
})


app.listen(3000,()=>{
    console.log("server started on the port 3000")
})