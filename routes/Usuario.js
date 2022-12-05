const express = require("express");
const app = express();
const {
  userCreate,
  userDelete,
  userEdit,
  userFindAll,
  userFindById,
} = require("../controllers/Usuario");
const {
  userFindByEnrolmentCode,
} = require("../controllers/UsuarioEnrolmentCode");

app.post("/", userCreate);
app.get("/", userFindAll);
app.get("/:id", userFindById);
app.get("/enrolment-code/:enrolmentCode", userFindByEnrolmentCode);
app.patch("/edit", userEdit);
app.post("/delete", userDelete);

module.exports = app;
