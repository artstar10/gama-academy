// Utilização do fetch para fazer a requisição de api de cep
fetch(`https://api.postmon.com.br/v1/cep/05049000`).then(retorno_cep => {
    // console.log(retorno_cep.json());
    return retorno_cep.json();
}).then(preenchimento_campo=>{
    document.getElementById("endereco").value=(preenchimento_campo.logradouro);
    document.getElementById("bairro").value=(preenchimento_campo.bairro);
    document.getElementById("cep_preechimento").value=(preenchimento_campo.cep);
    document.getElementById("estado").value=(preenchimento_campo.estado);
    document.getElementById("estado").value=(preenchimento_campo.estado);
    document.getElementById("cidade").value=(preenchimento_campo.cidade);
    
})
