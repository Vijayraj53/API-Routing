const express = require("express");
const add = express();

app.get("/", (request, response) => {
  response.send("Home Page");
});

app.get("/about", (request, response) => {
  response.send("About Page");
});

module.exports = app;
