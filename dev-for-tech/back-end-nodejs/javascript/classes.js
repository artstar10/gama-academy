class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }

    get nome(){
        return this._nome;
    }
    set nome(value){
        this._nome = value;
    }
}

let pessoa = new Pessoa('Arthur');
pessoa.nome = "Thur"
console.log(pessoa.nome);