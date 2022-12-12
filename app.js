const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./models/User");
const user = require("./routes/User.js");
require("./models/Turma");
const turma = require("./routes/Turma.js");
require("./models/Atendimento");
const atendimento = require("./routes/Atendimento.js");
require("./models/Post");
const post = require("./routes/Post.js");
const cors = require("cors");
require("dotenv").config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* MongoDB & Mongoose */
const mongoLink = process.env.MONGO_URL;
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoLink)
  .then(() => {
    console.log("Connected to MongoDB Database!");
  })
  .catch((err) => {
    console.log("There was an error connecting to MongoDB Database: " + err);
  });

app.use("/users", user);
app.use("/turmas", turma);
app.use("/atendimentos", atendimento);
app.use("/posts", post);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server Running at Port ${PORT} `);
});
