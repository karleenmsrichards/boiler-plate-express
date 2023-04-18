let express = require("express");
let app = express();

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", function (request, response) {
  absolutePath = __dirname + "/views/index.html";
  response.sendFile(absolutePath);
});

console.log("Hello World");

module.exports = app;
