const express = require("express");
const routes = require("./routes")

const app = express();

app.use(express.json()); // essa confiuração serve para utilizar estrutura de json possibilitando imprimir o req.body/objeto no terminal após dar um send na rota cadastrar no imsomnia

app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));