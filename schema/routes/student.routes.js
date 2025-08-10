const express = require("express");
const router = express.Router();
const studentCtrl = require("../controllers/student.controller");

router.post("/", studentCtrl.createStudent);
router.delete("/:id", studentCtrl.deleteStudent);
router.get("/:id/courses", studentCtrl.getStudentCourses);

module.exports = router;
