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
let outroLivro = new Livro("Lógica para programação", "Giulia", 100);
console.log(livro, outroLivro);