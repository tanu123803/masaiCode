const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: String,
  description: String
});

// ✅ Prevent OverwriteModelError
const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

module.exports = Course;
