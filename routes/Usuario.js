const express = require("express");
const app = express();
const {
  userCreate,
  userDelete,
  userEdit,
  userFindAll,
  userFindByEnrolmentCode,
  userFindById,
} = require("../controllers/Usuario");

app.post("/create", userCreate);
app.get("/findAll", userFindAll);
app.get("/findById/:id", userFindById);
app.get("/findByEnrolmentCode/:enrolmentCode", userFindByEnrolmentCode);
app.patch("/edit", userEdit);
app.post("/delete", userDelete);

module.exports = app;
