
// index.js
const express = require("express");
const rateLimit = require("express-rate-limit");
const apiRoutes = require("./routes/api");

const app = express();
app.use(express.json());


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 5,
    message: { error: "Too many requests, please try again later." }
});

app.use("/api", apiRoutes(limiter));


app.use("*", (req, res) => {
    res.status(404).json({ error: "404 Not Found" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
