const Consultation = require("../models/consultation.model");
const Doctor = require("../models/doctor.model");
const Patient = require("../models/patient.model");

// Create Consultation (only if both active)
exports.createConsultation = async (req, res) => {
    try {
        const { doctorId, patientId } = req.body;

        const doctor = await Doctor.findById(doctorId);
        const patient = await Patient.findById(patientId);

        if (!doctor || !doctor.isActive) return res.status(400).json({ error: "Doctor not active" });
        if (!patient || !patient.isActive) return res.status(400).json({ error: "Patient not active" });

        const consultation = new Consultation(req.body);
        await consultation.save();

        res.status(201).json(consultation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get recent 5 consultations
exports.getRecentConsultations = async (req, res) => {
    try {
        const consultations = await Consultation.find({ isActive: true })
            .sort({ consultedAt: -1 })
            .limit(5)
            .populate("doctorId", "name specialization")
            .populate("patientId", "name age gender");

        res.json(consultations);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
