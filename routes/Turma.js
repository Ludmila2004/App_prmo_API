const express = require("express");
const app = express();
const {
  turmaCreate,
  turmaFindAll,
  turmaDelete,
} = require("../controllers/Turma");


app.post("/", turmaCreate);
app.get("/", turmaFindAll);
app.delete("/:id", turmaDelete);


module.exports = app;
