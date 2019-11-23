const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { UserShow, UserInsertUpdateStates } = require("./authMiddleware");
const Index = require("./stateController");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/user", [UserShow], async (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

app.post("/user/states", [UserInsertUpdateStates], async (req, res) => {
	res.json({
		success: true
	})
})

app.get("/state", [Index], async (req, res) => {
  res.json({
    success: true,
    states: req.states
  });
});

app.listen(5006, () => {
  console.log("server ready");
});
