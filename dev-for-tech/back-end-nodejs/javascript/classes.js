class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    ler(){
        return `Estou lendo ${this.titulo}`
    }
}
//criando objeto livro
let livro = new Livro("Algoritmos para programação", "Arthur", 500);
console.log(livro.ler());