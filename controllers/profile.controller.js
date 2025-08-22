import User from "../models/User.js";

export async function getProfile(req, res) {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
}

export async function updateProfile(req, res) {
  const { name, password } = req.body;
  const user = await User.findById(req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  if (name) user.name = name;
  if (password) user.password = password; // will hash in pre-save
  await user.save();
  res.json({ message: "Profile updated" });
}
