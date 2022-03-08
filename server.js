const express = require("express");
const cors = require("cors");

const data = require("./apiData");
const quizData = require("./quizQuestions");
const { applyEach } = require("async");
const app = express();
<<<<<<< HEAD
const path = require("path");
=======
const PORT = process.env.PORT || 5000
>>>>>>> 38129a9481852ed49323285d1704b3218025995c

app.use(cors());
app.use(express.static('public'));
app.use(express.static(path.resolve(__dirname, "./frontEnd/worldofsuperheroes/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./frontEnd/worldofsuperheroes/build", "index.html"));
});

app.get("/api", (req, res) => {
    res.json(data);
});

app.get("/quizData",(req,res) => {
    console.log(quizData);
    res.json(quizData);
});

app.listen(PORT, () => {
    console.log("server is running on port 5000.");
})