const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: String,
    email: String,
    isMarried: Boolean,
    location: String
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;









