const dotenv = require("dotenv").config();
let express = require("express");
let app = express();

const messageStyle = process.env.MESSAGE_STYLE;

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function (request, response) {
  const absolutePath = __dirname + "/views/index.html";
  response.sendFile(absolutePath);
});

app.get("/json", function (request, response) {
  let greeting = "Hello json";
  if (messageStyle === "uppercase") {
    response.json({ message: greeting.toUpperCase() });
  } else {
    response.json({ message: greeting });
  }
});

module.exports = app;
