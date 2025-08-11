
const express=require("express");
const lectureRouter = express.Router()

lectureRouter.get("/all-lectture",(req,res)=>{
    res.json({msg:"this is all lecture route"})
})
lectureRouter.post("/add-lecture",(req,res)=>{
    res.json({msg:"added all the lecture route"})
})

lectureRouter.put("/update-lecture",(req,res)=>{
    res.json({msg:"update all the curses"})
})
lectureRouter.delete("/delete-course",(req,res)=>{
    res.json({msg:"lecture are dleted from the lms"})
})

module.exports=lectureRouter;
