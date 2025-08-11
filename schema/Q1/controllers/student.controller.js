const Student = require("../../models/student.model");
const Enrollment = require("../../models/enrollment.model");

exports.createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        );

        if (!student) return res.status(404).json({ message: "Student not found" });

        // Cascade: deactivate enrollments
        await Enrollment.updateMany({ studentId: req.params.id }, { isActive: false });

        res.json({ message: "Student deactivated & enrollments updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getStudentCourses = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({
            studentId: req.params.id,
            isActive: true
        }).populate({
            path: "courseId",
            match: { isActive: true }
        });

        const activeCourses = enrollments
            .map(e => e.courseId)
            .filter(course => course !== null);

        res.json(activeCourses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
