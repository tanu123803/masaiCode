const express = require("express");
const router = express.Router();
const enrollmentCtrl = require("../controllers/enrollment.controller");

router.post("/", enrollmentCtrl.enrollStudent);

module.exports = router;
