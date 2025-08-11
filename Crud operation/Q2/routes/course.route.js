const express = require("express");
const { getAllcourses, addcourse, updatedata, deletedata } = require("../controller/course.controller");
const Limiter=require("../middleware/ratelimiter")

const courseRouter = express.Router();

courseRouter.get("/all-courses",Limiter, getAllcourses);
courseRouter.post("/add-courses", addcourse);
courseRouter.put("/update/:id", updatedata); 
courseRouter.delete("/delete-course/:id", deletedata);

module.exports = courseRouter;
