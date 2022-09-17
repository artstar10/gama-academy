const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
app.use(bodyParser.json())
//Criando uma nova rota
// app.get('/soma',(req,res)=>{

//     //Criando uma variável para pegar a requisição digitada dentro do nosso body
//     const query= req.query
//     console.log(query)
//     const media= (Number(query.n1)+Number(query.n2))/2
    
//     res.send(`A média é ${media}`);

// });
//ROTA MÉDIA DO ALUNO
app.get('/media', (req,res)=>{
    query = req.query
    let media = (Number(query.numero1) + Number(query.numero2)) / 2;
    res.send(`A nota 1 é : ${query.numero1} <br> A nota 2 é : ${query.numero2} <br>A média obtida foi: ${media}`)
})
app.listen(8081, ()=> console.log("Servico no Ar"));

//exemplo 1
// app.get('/media2', (req,res) => {
//     const query = req.query;
//     console.log(query);
//     const media = (Number(query.n1) + Number(query.n2)) / 2;
//     let resultado = "";
//     if(media >= 5){
//         resultado = "Aprovado";
//     }else{
//         resultado = "Reprovado";
//     }
//     res.send(`<div>A nota 1 é : ${Number(query.n1)} <br><br> A nota 2 é : ${Number(query.n2)}  <br><br> A média é ${media}, aluno ${resultado}. </div>`);
// });