require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const doctorRoutes = require("./routes/doctor.routes");
const patientRoutes = require("./routes/patient.routes");
const consultationRoutes = require("./routes/consultation.routes");

const app = express();
app.use(express.json());

app.use("/doctors", doctorRoutes);
app.use("/patients", patientRoutes);
app.use("/consultations", consultationRoutes);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () => console.log("Server running on port 3000"));
    })
    .catch(err => console.error(err));
