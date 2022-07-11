const express = require("express");
const bodyParser = require("body-parser");
const challenge = require("./Routes/challenge");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, Put, Delete");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(challenge);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
