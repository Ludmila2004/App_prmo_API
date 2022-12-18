const mongoose = require("mongoose");
require("../models/Atendimento");
const Atendimento = mongoose.model("atendimentos");

const atendimentoCreate = async (req, res) => {
  const atendimento = new Atendimento({
    turma: req.body.turma,
    data: req.body.data,
    atividade: req.body.curso,
    nome: req.body.nome,
    enrolmentCode: req.body.enrolmentCode,
  });
  try {
    await atendimento.save();
    return res.status(200).json({ message: "Atendimento criado." });
  } catch (error) {
    return res.status(500).json({ message: "Falha na criação do atendimento: " + error });
  }
};

const atendimentoFindAll = async (req, res) => {
    try {
      const atendimentos = await Atendimento.find().lean();
      return res.status(200).json(atendimentos);
    } catch (error) {
      return res.status(404).json({ message: "Atendimento not found: " + error });
    }
};

const atendimentoDelete = async (req, res) => {
  try {
    await Atendimento.deleteOne({ _id: req.params.id }).lean();
    return res.status(200).json({ message: "Deleted atendimento." });
  } catch (error) {
    return res.status(404).json({ message: "Could not delete atendimento: " + error });
  }
};


module.exports = {
    atendimentoCreate,
    atendimentoFindAll,
    atendimentoDelete,
};