const mongoose = require("mongoose");
require("../models/Turma");
const Turma = mongoose.model("turmas");

const turmaCreate = async (req, res) => {
  const turma = new Turma({
    name: req.body.name,
    turno: req.body.turno,
    curso: req.body.curso,
  });
  try {
    await turma.save();
    return res.status(200).json({ message: "Turma criada." });
  } catch (error) {
    return res.status(500).json({ message: "Falha na criação da turma: " + error });
  }
};

const turmaFindAll = async (req, res) => {
    try {
      const turmas = await Turma.find().lean();
      return res.status(200).json(turmas);
    } catch (error) {
      return res.status(404).json({ message: "Turma not found: " + error });
    }
};


module.exports = {
    turmaCreate,
    turmaFindAll,
};