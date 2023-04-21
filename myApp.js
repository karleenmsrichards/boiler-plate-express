let express = require("express");
let app = express();

const dotenv = require("dotenv").config();

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(function middleware(request, response, next) {
  var string = request.method + " " + request.path + " - " + request.ip;
  console.log(string);
  next();
});

app.get("/", function (request, response) {
  const absolutePath = __dirname + "/views/index.html";
  response.sendFile(absolutePath);
});

app.get("/json", function (request, response) {
  const messageStyle = process.env.MESSAGE_STYLE;
  let greeting = "Hello json";
  if (messageStyle === "uppercase") {
    response.json({ message: greeting.toUpperCase() });
  } else {
    response.json({ message: greeting });
  }
});

app.get(
  "/now",
  function (request, respsonse, next) {
    request.time = new Date().toString();
    next();
  },
  function (request, response) {
    response.json({ time: request.time });
  }
);

app.get("/:word/echo", function (request, response) {
  const word = request.params.word;
  response.json({ echo: `${word}` });
});

module.exports = app;
