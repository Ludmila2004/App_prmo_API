const express = require("express");
const app = express();
const {
  atendimentoCreate,
  atendimentoFindAll,
} = require("../controllers/Atendimento");


app.post("/", atendimentoCreate);
app.get("/", atendimentoFindAll);


module.exports = app;
