const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : String,
    email : String,

})

const studentModel = mongoose.model("course",studentSchema);
module.exports = studentModel