const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const User = require("../models/User");
const { sendResetEmail } = require("../mailer");

const router = express.Router();

// rate limit forgot-password route
const forgotLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5
});

// POST /signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body || {};
    if (!name || !email || !password) {
      return res.status(400).json({ message: "name, email, password required" });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "Email already in use" });

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, passwordHash });
    res.status(201).json({ message: "User created", userId: user._id });
  } catch (err) {
    res.status(500).json({ message: "Signup failed", error: err.message });
  }
});

// POST /login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { sub: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || "1d" }
    );

    res.json({ accessToken: token });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
});

// POST /forgot-password
router.post("/forgot-password", forgotLimiter, async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email) return res.status(400).json({ message: "email required" });

    const user = await User.findOne({ email });

    if (user) {
      const resetToken = jwt.sign(
        { sub: user._id, email: user.email },
        process.env.RESET_TOKEN_SECRET,
        { expiresIn: process.env.RESET_TOKEN_EXPIRES || "15m" }
      );

      const exp = new Date(Date.now() + 15 * 60 * 1000);
      user.resetToken = resetToken;
      user.resetTokenExp = exp;
      await user.save();

      const base = process.env.APP_BASE_URL || "http://localhost:3000";
      const link = `${base}/reset-password/${resetToken}`;

      try {
        await sendResetEmail(user.email, link);
      } catch (mailErr) {
        console.error("Email send failed:", mailErr.message);
      }
    }

    // generic response
    res.json({ message: "If this email is registered, a reset link has been sent." });
  } catch (err) {
    res.status(500).json({ message: "Forgot password failed", error: err.message });
  }
});

// POST /reset-password/:token
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body || {};
    if (!password) return res.status(400).json({ message: "new password required" });

    let payload;
    try {
      payload = jwt.verify(token, process.env.RESET_TOKEN_SECRET);
    } catch (e) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const user = await User.findById(payload.sub);
    if (!user || user.resetToken !== token || !user.resetTokenExp || user.resetTokenExp < new Date()) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    user.passwordHash = passwordHash;
    user.resetToken = null;
    user.resetTokenExp = null;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Reset password failed", error: err.message });
  }
});

module.exports = router;
