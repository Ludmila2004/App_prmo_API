const express = require("express");
const app = express();
const {
  atendimentoCreate,
  atendimentoFindAll,
  atendimentoDelete,
} = require("../controllers/Atendimento");


app.post("/", atendimentoCreate);
app.get("/", atendimentoFindAll);
app.delete("/:id", atendimentoDelete);


module.exports = app;
