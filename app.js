// import dependencies
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import logger from "morgan";
import mainRoutes from "./server/routes/main";
var cors = require("cors");
const https = require("https");
const fs = require("fs");

/*var key = fs.readFileSync(__dirname + "/certs/ssl.key");
var cert = fs.readFileSync(__dirname + "/certs/ssl.crt");
var options = {
  key: key,
  cert: cert
};*/

//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// set up dependencies
const app = express();

app.use(bodyParser.json());
app.use(logger("dev"));
app.use("/api/", mainRoutes);
app.use(
  cors({
    origin: "*"
  })
);

//var server = https.createServer(options, app);

// set up mongoose
/*mongoose
  .connect("mongodb://localhost/betmygame")
  .then(() => {
    console.log("Database connected");
  })
  .catch(error => {
    console.log("Error connecting to database");
  });*/
// set up port
const port = 9090;
// set up route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to BetMyGame"
  });
});

app.get("/authorise", (req, res) => {
  const token = req.header("Authorization");
  res.status(200).json({
    message: "Got your token " + token + ". Thanks dude."
  });
});

//https.createServer(options, app).listen(443);
app.listen(9090, err => {
  console.log("Listening");
});
