const express = require("express");
const a = express();

a.get("/", (request, response) => {
  const date = new Date();
  response.send(
    `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
  );
});

module.exports = a;
