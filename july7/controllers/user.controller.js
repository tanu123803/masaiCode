const User = require('../models/user.model');


async function createUser(req, res) {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ msg: "User created", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


async function addAddress(req, res) {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.addresses.push(req.body);
    await user.save();
    res.json({ msg: "Address added", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Get user details with addresses
async function getUserDetails(req, res) {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}


async function getUserSummary(req, res) {
  try {
    const users = await User.find();

    const totalUsers = users.length;
    const totalAddresses = users.reduce((sum, user) => sum + user.addresses.length, 0);
    const userSummary = users.map(u => ({
      name: u.name,
      addressCount: u.addresses.length
    }));

    res.json({ totalUsers, totalAddresses, userSummary });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


async function deleteAddress(req, res) {
  try {
    const { userId, addressIndex } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    user.addresses.splice(addressIndex, 1);
    await user.save();

    res.json({ msg: "Address deleted", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = {
  createUser,
  addAddress,
  getUserDetails,
  getUserSummary,
  deleteAddress
};
