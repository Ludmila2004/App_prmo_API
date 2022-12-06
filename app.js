const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./models/Usuario");
const Usuario = mongoose.model("usuarios");
const usuario = require("./routes/Usuario.js");
const cors = require("cors");
require("dotenv").config();

/* configuração para converter o body da requisição para json (body-parser descontinuado) */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  app.use(cors());
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Configuração de MongoDB e Mongoose */
const mongoLink = process.env.MONGO_URL;
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoLink)
  .then(() => {
    /* pode ser o link ou o db.mongoURI */
    console.log("Conectado ao banco de dados MongoDB!");
  })
  .catch((err) => {
    console.log(
      "Houve um erro na conexão com o banco de dados MongoDB! " + err
    );
  });

app.use("/usuarios", usuario);

app.listen(8080, () => {
  console.log("servidor rodando :3 ");
});
