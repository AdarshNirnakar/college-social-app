var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");

const admin = require("firebase-admin");

var app = express();

const serviceAccount = require("config/fbServiceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "", // db url
});

function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin
      .auth()
      .verifyIdToken(req.headers.authtoken)
      .then(() => next())
      .catch(() => res.status(403).send("Unauthorised"));
  } else {
    res.status(403).send("Unauthorised");
    return;
  }
}

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
