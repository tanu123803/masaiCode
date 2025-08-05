
const express = require("express");
const connectToDB = require("./db");
const taskRoutes = require("./routes/task.routes");

const app = express();
app.use(express.json());

app.use("/api", taskRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = 3000;
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
