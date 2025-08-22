const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema({
    courseId: {type:mongoose.Schema.Types.ObjectId,ref:"course"},
    studentId: {type:mongoose.Schema.Types.ObjectId,ref:"student"},
    isActive: Boolean   // fixed spelling
});

const enrollmentModel = mongoose.model("Enrollment", enrollmentSchema);
module.exports = enrollmentModel;
