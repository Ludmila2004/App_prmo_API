const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("users");

const userFindByEnrolmentCode = async (req, res) => {
  try {
    const user = await User.findOne({
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
