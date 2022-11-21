const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("./models/Usuario")
const Usuario = mongoose.model("usuarios")

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

/*
app.get("/criarusuarios_teste", (req, res)=>{
    const usuario = new Usuario({
        nome: 'jorge',
        email: 'jorge@gmail.com',
        enrolmentCode: '0123456789',
        isAdmin: true,
        isMonitor: true,
        password: '12345678'
    })
    usuario.save().then(()=>{
        console.log('usuario salvo :3');
    })
})
*/
app.get("/usuarios", (req, res)=>{
    Usuario.find().lean().then((usuarios)=>{
        return res.json(usuarios)
    })
})

app.listen(8080, ()=>{
    console.log('servidor rodando :3 ');
})
