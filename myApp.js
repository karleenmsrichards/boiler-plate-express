let express = require("express");
let app = express();

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function (request, response) {
  absolutePath = __dirname + "/views/index.html";
  response.sendFile(absolutePath);
});

app.get("/json", function (request, response) {
  response.json({ message: "Hello json" });
});

console.log("Hello World");

module.exports = app;
