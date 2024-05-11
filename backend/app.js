var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");
const { default: checkAuth } = require("./services/fbAuth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use("/", checkAuth);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

module.exports = app;
