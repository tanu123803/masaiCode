const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./src/db");
const authRoutes = require("./src/routes/auth.routes");

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auth & Password Reset API running");
});

app.use("/api", authRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
});
