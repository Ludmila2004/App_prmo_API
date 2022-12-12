const express = require("express");
const app = express();
const {
  turmaCreate,
  turmaFindAll,
} = require("../controllers/Turma");


app.post("/", turmaCreate);
app.get("/", turmaFindAll);


module.exports = app;
