const express = require("express");

const app = express();

app.listen("8000", (req, res) => {
  console.log("aplicación iniciada en localhost://8000");
});
