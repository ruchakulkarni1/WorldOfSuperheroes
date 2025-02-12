const express = require("express");
const cors = require("cors");

const data = require("./apiData");
const quizData = require("./quizQuestions");
const { applyEach } = require("async");
const app = express();

app.use(cors());
app.use(express.static('public'));

const path = require("path")
app.use(express.static(path.join(__dirname, "frontEnd/worldofsuperheroes", "build")))

app.get("/", (req, res) => {
    console.log("Server is running.. Hi there!!")
    res.json(data);
});

app.get("/api", (req, res) => {
    res.json(data);
});

app.get("/quizData",(req,res) => {
    console.log(quizData);
    res.json(quizData);
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontEnd/worldofsuperheroes", "build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
    console.log("server is running on port 5000.");
})
