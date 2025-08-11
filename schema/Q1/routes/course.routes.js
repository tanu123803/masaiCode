const express = require("express");
const router = express.Router();
const courseCtrl = require("../controllers/course.controller");

router.post("/", courseCtrl.createCourse);
router.delete("/:id", courseCtrl.deleteCourse);
router.get("/:id/students", courseCtrl.getCourseStudents);

module.exports = router;
