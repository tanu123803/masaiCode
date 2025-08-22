import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import User from "./models/User.js";

import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import profileRoutes from "./routes/profile.js";
import resourcesRoutes from "./routes/resources.js";

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") || "*"}));
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_, res) => res.send("RBAC API up"));
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/resources", resourcesRoutes);

const PORT = process.env.PORT || 4000;

async function seedAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const pass = process.env.ADMIN_PASSWORD;
  if (!email || !pass) return;
  const hasAdmin = await User.findOne({ email });
  if (!hasAdmin) {
    await User.create({ name: "Admin", email, password: pass, role: "admin" });
    console.log("👑 Admin user created:", email);
  }
}

connectDB(process.env.MONGO_URI).then(async () => {
  await seedAdmin();
  app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));
});