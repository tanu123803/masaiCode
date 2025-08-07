const Profile = require("../models/Profile.model");
const User = require("../models/User.model");

const addProfile = async (req, res) => {
  const { bio, socialMediaLinks, user } = req.body;

  try {
    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const profileExists = await Profile.findOne({ user });
    if (profileExists) {
      return res.status(400).json({ error: "Profile already exists for this user" });
    }

    const profile = new Profile({ bio, socialMediaLinks, user });
    await profile.save();

    res.status(201).json({ message: "Profile created", profile });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", "name email");
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addProfile, getAllProfiles };
