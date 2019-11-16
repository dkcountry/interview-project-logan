const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authMiddleware = require("./authMiddleware");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/user", [authMiddleware], async (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

app.listen(5006, () => {
  console.log("server ready");
});
