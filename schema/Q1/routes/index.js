require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const studentRoutes = require("./routes/student.routes");
const courseRoutes = require("./routes/course.routes");
const enrollmentRoutes = require("./routes/enrollment.routes");

const app = express();
app.use(express.json());

// Routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);
app.use("/enroll", enrollmentRoutes);

// DB + Server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch(err => console.error(err));
