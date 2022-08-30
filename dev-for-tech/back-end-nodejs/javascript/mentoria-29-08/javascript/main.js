// Utilização do fetch para fazer a requisição de uma api
fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta=>{
    //console.log(resposta.json());
    return resposta.json();
}).then(corpo=>{
    document.getElementById("valor").innerHTML=corpo.USDBRL.low;
    document.getElementById("retorno").innerHTML=corpo.USDBRL.name;
    
})


fetch(`https://api.postmon.com.br/v1/cep/05049000`).then(retorno_cep => {
    // console.log(retorno_cep.json());
    return retorno_cep.json();
}).then(preenchimento_campo=>{
    document.getElementById("cep").innerHTML=preenchimento_campo.cep;
    document.getElementById("endereco").innerHTML=preenchimento_campo.logradouro;
    
})
