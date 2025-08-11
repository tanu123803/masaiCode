

const fs=require("fs")


const express=require("express");



const app=express();
app.use(express.json());


app.get("./test",(req,res)=>{
    res.json({msg:"this is a test route"})
})

app.get("./all-courses",(req,res)=>{

     let data=fs.readFileSync("./db.json","utf-8")
     console.log(data)
     res.json({msg:"this is a db file"})
     let courses=data.courses

})



app.listen(3000,()=>{
    console.log("server started on port 3000")
})