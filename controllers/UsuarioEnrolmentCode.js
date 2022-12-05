const mongoose = require("mongoose");
require("../models/Usuario");
const Usuario = mongoose.model("usuarios");

const userFindByEnrolmentCode = async (req, res) => {
  try {
    const user = await Usuario.findOne({
      enrolmentCode: req.params.enrolmentCode,
    }).lean();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: "User not found: " + error });
  }
};

module.exports = {
  userFindByEnrolmentCode,
};
