const mongoose = require('mongoose');
const addressSchema = require('./address.model');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/.+@.+\..+/, "Invalid email"]
  },
  age: { type: Number },
  addresses: [addressSchema] 
});

const User = mongoose.model('User', userSchema);
module.exports = User;
