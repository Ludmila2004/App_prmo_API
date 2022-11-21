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

app.post("/criar", (req, res)=>{
  const usuario = new Usuario({
      name: req.body.name,
      email: req.body.email,
      enrolmentCode: req.body.enrolmentCode,
      isAdmin: req.body.isAdmin,
      isMonitor: req.body.isMonitor,
      password: req.body.password
  })
  usuario.save().then(()=>{
      console.log('usuario salvo :3');
  })
})

app.get("/usuarios", (req, res)=>{
    Usuario.find().lean().then((usuarios)=>{
        return res.json(usuarios)
    })
})

app.get("/usuarios/:nome", (req, res)=>{
  Usuario.findOne({ name: req.params.nome }).lean().then((usuario)=>{
    console.log(usuario);
    return res.json(usuario)
  })
})


app.listen(8080, ()=>{
    console.log('servidor rodando :3 ');
})
