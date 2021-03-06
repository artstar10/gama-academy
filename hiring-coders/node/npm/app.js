// Incluindo uma biblioteca 
const http = require('http'); // biblioteca http
const url = require('url'); // biblioteca url
const queryString = require('query-string'); // query-string serve para pegasr informação pela url

// definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

//implementação da regra de negócio
const server = http.createServer((req, res) => {

  // pegar a pergunta na url
  const params = queryString.parse(url.parse(req.url, true).search);
  
  // verificar a pergunta e escolher uma resposta
  let resposta;
  if (params.pergunta == 'melhor-filme') {
    resposta = 'star wars';
  }
  else if (params.pergunta == 'melhor-tecnologia-backend') {
    resposta = 'node.js';
  }
  else{
    resposta = 'não sei, desculpe :(';
  }
  // retornar a resposta escolhida

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(resposta);
});

// execução
server.listen(port, hostname, () => {
  console.log(`npm: Server running at http://${hostname}:${port}/`);
});


// http://localhost:3000/?pergunta=melhor-filme