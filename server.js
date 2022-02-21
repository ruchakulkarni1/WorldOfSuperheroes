const express = require("express");
const cors = require("cors");

const data = require("./apiData");
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.json(data);
});

app.listen(5000, () => {
    console.log("server is running on port 5000.");
})