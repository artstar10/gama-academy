// Utilização do fetch para fazer a requisição de api de filmes
const tabelaDeFilmes = document.getElementById('tabela');

fetch(`https://api.tvmaze.com/search/shows?q=star%20wars`).then(retorno_filmes => {
      return retorno_filmes.json();
    }).then(filmes => {
      filmes.forEach(filme => {
        tabelaDeFilmes.innerHTML += "<tr>" +
          "<td>" + filme.show.name + "</td>" +
          "<td>" + filme.show.url + "</td>" +
          "</tr>"
      });
    });
