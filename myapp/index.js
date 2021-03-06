// express is node.js framework. It is used to create single page , multi page and hybrid page applications and APIs
const express = require("express");
//Mongoose provides a straight-forward, schema-based solution to model your application data.
const mongoose = require("mongoose")

const checkRout = require("./middleware/jwt")
const userRouter = require("../myapp/router/userrouter")
const videoRouter = require("./router/videotutRouter")
const signupRouter = require("./router/signupUser")
const validation = require("./router/validatorUser")
const dateRouter = require("./router/dateRouter")
const arrayRouter = require("./router/arrOfobj")

const app = express();
app.use(express.json());

app.use("/check", checkRout)
app.use("/video", videoRouter)
app.use("/user", userRouter)
app.use('/api', signupRouter)
app.use("/valid", validation)
app.use("/date", dateRouter)
app.use("/array", arrayRouter)

mongoose.connect("mongodb://localhost:27017/load", () => {
    console.log("connected")
})


app.listen(8000, () => {
    console.log("this app is running on port 8000")
})
const fetch = require("node-fetch")
fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=YOUR_KEY"
)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
