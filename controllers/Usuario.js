const mongoose = require("mongoose");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");

export const userCreate = (req, res) => {
  const usuario = new Usuario({
    name: req.body.name,
    email: req.body.email,
    enrolmentCode: req.body.enrolmentCode,
    isAdmin: req.body.isAdmin,
    isMonitor: req.body.isMonitor,
    password: req.body.password,
  });
  usuario.save().then(() => {
    console.log("usuario salvo :3");
  });
};

export const userFindAll = (req, res) => {
  Usuario.find()
    .lean()
    .then((usuarios) => {
      return res.json(usuarios);
    });
};

export const userFindById = (req, res) => {
  Usuario.findOne({ _id: req.params.id })
    .lean()
    .then((usuario) => {
      console.log(usuario);
      return res.json(usuario);
    });
};

export const userFindByEnrolmentCode = (req, res) => {
  Usuario.findOne({ enrolmentCode: req.params.enrolmentCode })
    .lean()
    .then((usuario) => {
      console.log(usuario);
      return res.json(usuario);
    });
};

export const userEdit = (req, res) => {
  Usuario.findOne({ _id: req.body.id })
    .then((usuario) => {
      usuario.name = req.body.name;
      usuario.email = req.body.email;
      usuario.enrolmentCode = req.body.enrolmentCode;
      usuario.isAdmin = req.body.isAdmin;
      usuario.isMonitor = req.body.isMonitor;
      usuario.password = req.body.password;
      usuario
        .save()
        .then(() => {
          console.log("user atualizado");
        })
        .catch((err) => {
          console.log("erro ao editar !");
        });
    })
    .catch((err) => {
      console.log("erro na edicao");
      console.log(err);
    });
};

export const userDelete = (req, res) => {
  Usuario.deleteOne({ _id: req.body.id })
    .lean()
    .then(() => {
      console.log("user removido");
      res.status(200).json({ message: "deleted user" });
    })
    .catch((err) => {
      console.log("erro: " + err);
    });
};

module.exports = app;
