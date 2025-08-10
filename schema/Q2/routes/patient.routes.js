const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patient.controller");

router.post("/", patientController.createPatient);
router.get("/:id/doctors", patientController.getDoctorsByPatient);
router.get("/", patientController.getActiveMalePatients);
router.delete("/:id", patientController.deletePatient);

module.exports = router;
