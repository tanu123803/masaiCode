const User = require("../models/User.model");
const Book = require("../models/Book.model");

exports.addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User added", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.userRentals = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate("rentedBooks");
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};
