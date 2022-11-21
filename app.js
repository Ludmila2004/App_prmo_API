const express = require("express")
const app = express()
const mongoose = require("mongoose")
/* configuração para converter o body da requisição para json (body-parser descontinuado) */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Configuração de MongoDB e Mongoose */
const mongoLink = "teste123"
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

app.listen(8080, ()=>{
    console.log('servidor rodando :3 ');
})
