const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const mainRoutes = require("./routes/main.routes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/", mainRoutes);

connectDB();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
