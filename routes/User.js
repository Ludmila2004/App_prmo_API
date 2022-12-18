const express = require("express");
const app = express();

const { authenticate } = require("../controllers/Auth");

const {
  userCreate,
  userDelete,
  userEdit,
  userFindAll,
  userFindById,
} = require("../controllers/User");

const { userFindByEnrolmentCode } = require("../controllers/UserEnrolmentCode");

app.post("/", userCreate);
app.get("/", userFindAll);
app.get("/:id", userFindById);
app.get("/enrolment-code/:enrolmentCode", userFindByEnrolmentCode);
app.patch("/:id", userEdit);
app.delete("/:id", userDelete);

app.post("/auth", authenticate);

module.exports = app;
