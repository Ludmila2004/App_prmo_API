const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./models/Usuario");
const Usuario = mongoose.model("usuarios");
const usuario = require("./routes/Usuario.js")

/* configuração para converter o body da requisição para json (body-parser descontinuado) */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Configuração de MongoDB e Mongoose */
const mongoLink = "mongodb+srv://nossouser:nossasenha123@cluster0.muxyzuo.mongodb.net/guloseimas-da-val-database?retryWrites=true&w=majority"
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


app.use("/usuarios", usuario)

app.listen(8080, () => {
  console.log("servidor rodando :3 ");
});
