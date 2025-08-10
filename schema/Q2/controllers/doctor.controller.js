const Doctor = require("../models/doctor.model");
const Consultation = require("../models/consultation.model");

// Create Doctor
exports.createDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json(doctor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get Patients consulted by Doctor
exports.getPatientsByDoctor = async (req, res) => {
    try {
        const patients = await Consultation.find({ doctorId: req.params.id, isActive: true })
            .populate("patientId", "name age gender")
            .sort({ consultedAt: -1 })
            .limit(10)
            .select("patientId consultedAt");

        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Count consultations by Doctor
exports.getConsultationCount = async (req, res) => {
    try {
        const count = await Consultation.countDocuments({ doctorId: req.params.id, isActive: true });
        res.json({ count });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Soft delete doctor + related consultations
exports.deleteDoctor = async (req, res) => {
    try {
        await Doctor.findByIdAndUpdate(req.params.id, { isActive: false });
        await Consultation.updateMany({ doctorId: req.params.id }, { isActive: false });
        res.json({ message: "Doctor and related consultations marked inactive" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
