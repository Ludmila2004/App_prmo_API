const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// name, id, email, enrolmentCode, isAdmin, isMonitor, password
const Atendimento = new Schema({
  turma: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  atividade: {
    type: String,
    required: true,
  },
  enrolmentCode: {
    type: String,
    required: true,
  },
});

mongoose.model("atendimentos", Atendimento);
