let express = require("express");
let app = express();

app.get("/", function (request, response) {
  absolutePath = __dirname + "/views/index.html";
  response.sendFile(absolutePath);
});

console.log("Hello World");

module.exports = app;
