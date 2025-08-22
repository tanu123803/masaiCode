const express = require("express");
const studentModel = require("../model/student.model");
const courseModel = require("../model/course.model");
const enrollmentModel = require("../model/enrollment.model");

const lmsRouter = express.Router();

// add student 
lmsRouter.post("/add-student",async(req,res)=>{
    //name and email are coming from the req.body 
    try {
        let student = await studentModel.create(req.body)
        res.status(201).json({msg:"student added",student})

        
    } catch (error) {
        res.status(500).json({msg:"someting went wrong having issue issue with the fetching"})
        
    }

})
//add course
lmsRouter.post("/add-course",async(req,res)=>{
    try {
        let course = await courseModel.create(req.body);

        res.status(201).json({msg:"student added",student})   
    } catch (error) {
        res.status(500).json({msg:"someting went wrong having issue issue with the fetching"})
    }
})
//many to many relation is managed by enrolment
//enrollment is junction schema 
lmsRouter.post("/enroll",async(req,res)=>{
    //courseid and studentid is coming from the req.body
    try {
        let enroll = await enrollmentModel.create(req.body);

        res.status(201).json({msg:"enrolled",enroll})   
    } catch (error) {
        res.status(500).json({msg:"someting went wrong having issue issue with the fetching"})
    }
})

//get all the details by enrollment
lmsRouter.get("/enroll/:enrollId",async(req,res)=>{
    //courseid and studentid is coming from the req.body
    
    const{enrollId} = req.body
    try {
        let enroll = await enrollmentModel.findById(enrollId).populate("courseId").populate("studentId");

        res.status(201).json({msg:"enrolled",enroll})   
    } catch (error) {
        console.log(err)
        res.status(500).json({msg:"someting went wrong having issue issue with the fetching"})
    }
})
//get student details using courseId
//findig student through enrollments
lmsRouter.get("/students/:courseId",async(req,res)=>{
    //courseid and studentid is coming from the req.body
    
    const{courseId} = req.body
    try {
        let student = await enrollmentModel.find({courseId})
        res.status(201).json({msg:"student",student})

           
    } catch (error) {
        console.log(err)
        res.status(500).json({msg:"someting went wrong having issue issue with the fetching"})
    }
})
lmsRouter.get("/course/:studentId",async(req,res)=>{
    //courseid and studentid is coming from the req.body
    
    const{studentId} = req.body
    try {
        let courses = await enrollmentModel.find({studentId})
        res.status(201).json({msg:"coursedetails",courses})

           
    } catch (error) {
        console.log(err)
        res.status(500).json({msg:"someting went wrong having issue issue with the fetching"})
    }
})


module.exports = lmsRouter