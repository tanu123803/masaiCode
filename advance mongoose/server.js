//step 1 setup express app
//step 2  connnecting mongo db with node js
//step 3 creating schema and model
//step 4 create routes and controller and test in postman

const express = require("express");
const connectToDb = require("./configs/mongodb.config");
const userRouter = require("./routes/user.routes");
const UserRouter = require("./routes/user.routes");

const app = express();

connectToDb();
app.use(express.json());

app.get("/test", (req, res) => {
    res.status(200).json({ msg: "this is a test route" });
});

app.use("/user", UserRouter);

app.use((req, res) => {
    res.status(404).json({ msg: "this request is not found" });
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
