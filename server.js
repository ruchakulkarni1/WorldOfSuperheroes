const express = require("express");
const cors = require("cors");

const data = require("./apiData");
const { applyEach } = require("async");
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get("/api", (req, res) => {
    res.json(data);
});

app.listen(5000, () => {
    console.log("server is running on port 5000.");
})