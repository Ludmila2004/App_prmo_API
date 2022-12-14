const mongoose = require("mongoose");
require("../models/User");
const User = mongoose.model("users");

const userCreate = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    enrolmentCode: req.body.enrolmentCode,
    isAdmin: req.body.isAdmin,
    isMonitor: req.body.isMonitor,
    password: req.body.password,
  });
  try {
    await user.save();
    return res.status(200).json({ message: "User saved." });
  } catch (error) {
    return res.status(500).json({ message: "User not created: " + error });
  }
};

const userFindAll = async (req, res) => {
  try {
    const users = await User.find().select('-password').lean();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ message: "Users not found: " + error });
  }
};

const userFindById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id }, '-password').lean();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ message: "User not found: " + error });
  }
};

const userEdit = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    user.name = req.body.name;
    user.email = req.body.email;
    user.enrolmentCode = req.body.enrolmentCode;
    user.isAdmin = req.body.isAdmin;
    user.isMonitor = req.body.isMonitor;
    user.password = req.body.password;
    try {
      await user.save();
      return res.status(200).json({ message: "User edited." });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "User could not be edited: " + error });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ message: "User not found to edit: " + error });
  }
};

const userDelete = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id }).lean();
    return res.status(200).json({ message: "Deleted user." });
  } catch (error) {
    return res.status(404).json({ message: "Could not delete user: " + error });
  }
};

module.exports = {
  userCreate,
  userDelete,
  userEdit,
  userFindAll,
  userFindById,
};
