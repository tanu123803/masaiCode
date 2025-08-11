const Course = require("../../models/course.model");
const Enrollment = require("../../models/enrollment.model");

exports.createCourse = async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(
            req.params.id,
            { isActive: false },
            { new: true }
        );

        if (!course) return res.status(404).json({ message: "Course not found" });

        // Cascade: deactivate enrollments
        await Enrollment.updateMany({ courseId: req.params.id }, { isActive: false });

        res.json({ message: "Course deactivated & enrollments updated" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCourseStudents = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({
            courseId: req.params.id,
            isActive: true
        }).populate({
            path: "studentId",
            match: { isActive: true }
        });

        const activeStudents = enrollments
            .map(e => e.studentId)
            .filter(student => student !== null);

        res.json(activeStudents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
