import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/index";
import "dotenv/config";

const MONGO_URL = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running on http://localhost:8080");
});

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL).then(() => console.log("DB connected"));
mongoose.connection.on("error", (error: Error) => console.error(error));

app.use("/", router());
