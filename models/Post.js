const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// name, id, email, enrolmentCode, isAdmin, isMonitor, password
const Post = new Schema({
  mensagem: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

mongoose.model("posts", Post);
