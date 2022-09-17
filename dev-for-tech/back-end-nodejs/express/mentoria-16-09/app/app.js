const express = require('express');
const app = express()
const port = 3333


app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get('/notas', (req,res) => {
   const query = req.query
    const media = (parseFloat(query.n1) + parseFloat(query.n2))
    let resultado = "";
    if(media >= 5){
        resultado = "aprovado";
    }else{
        resultado = "reprovado";
    }
    res.send(`<p>O aluno ${query.nome}, tirou as notas ${parseFloat(query.n1)} e ${parseFloat(query.n2)}.</p><p> Ficou com a media ${media} e foi ${resultado}</p>`)
    
})




app.listen(port, () => {
    console.log(`listening on port http://localhost:$%7Bport%7D%60`)})