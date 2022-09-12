const express = require('express');

const routes = express.Router()

routes.get('/', (req, res)=>{
    res.send("Olá mundo!");
});

routes.post('/cadastrar', (req, res)=>{
    console.log(req.body);
    res.json(req.body);//enviar informações pelo res.json(imsomnia:nome, email)
});

module.exports = routes;