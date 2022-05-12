let nome = "Arthur";
if(nome === "artstar10"){
    console.log(`Legal! seu nome é este mesmo`)  
}else{
    console.log(`Que pena! seu nome não é artstar10`)
}

// MENU DE ATENDIMENTO PARA CLIENTE
pix = 1;
recarga = 2;
opcao = 1 // escolha do cliente é guardada aqui
switch (opcao) {//SWITCH CASE
    case 1:
        console.log(`você escolheu a opcao de pix`)
        break;
    case 2:
        console.log(`você escolheu a opcao de recarga`)
        break;    
    default:
        console.log(`Que pena! você não informou a opção correta`)
        break;
}

