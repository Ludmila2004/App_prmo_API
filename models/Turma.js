const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// name, turno, curso
const Turma = new Schema({
  name: {
    type: String,
    required: true,
  },
  turno: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
});

mongoose.model("turmas", Turma);
