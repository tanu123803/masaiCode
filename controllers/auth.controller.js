import jwt from "jsonwebtoken";
import User from "../models/User.js";

const sign = (user) =>
  jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

export async function register(req, res) {
  const { name, email, password, role } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: "Email already in use" });

  const user = await User.create({ name, email, password, role });
  const token = sign(user);
  res.status(201).json({ token, user: { id: user._id, name: user.name, email, role: user.role } });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password)))
    return res.status(401).json({ message: "Invalid credentials" });
  const token = sign(user);
  res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
}
