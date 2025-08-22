import User from "../models/User.js";
export async function listUsers(req, res) {
  const users = await User.find().select("-password");
  res.json(users);
}
