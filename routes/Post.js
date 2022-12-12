const express = require("express");
const app = express();
const {
  postCreate,
  postFindAll,
} = require("../controllers/Post");


app.post("/", postCreate);
app.get("/", postFindAll);


module.exports = app;
