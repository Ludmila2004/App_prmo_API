const express = require("express");
const app = express();
const {
  postCreate,
  postFindAll,
  postDelete,
  postEdit,
} = require("../controllers/Post");


app.post("/", postCreate);
app.get("/", postFindAll);
app.patch("/:id", postEdit);
app.delete("/:id", postDelete);


module.exports = app;
