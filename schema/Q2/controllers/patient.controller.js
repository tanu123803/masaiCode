const Patient = require("../models/patient.model");
const Consultation = require("../models/consultation.model");

// Create Patient
exports.createPatient = async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).json(patient);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get Doctors consulted by Patient
exports.getDoctorsByPatient = async (req, res) => {
    try {
        const doctors = await Consultation.find({ patientId: req.params.id, isActive: true })
            .populate("doctorId", "name specialization")
            .select("doctorId consultedAt");

        res.json(doctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get active male patients
exports.getActiveMalePatients = async (req, res) => {
    try {
        const patients = await Patient.find({ gender: "Male", isActive: true });
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Soft delete patient + related consultations
exports.deletePatient = async (req, res) => {
    try {
        await Patient.findByIdAndUpdate(req.params.id, { isActive: false });
        await Consultation.updateMany({ patientId: req.params.id }, { isActive: false });
        res.json({ message: "Patient and related consultations marked inactive" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
