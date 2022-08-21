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

class ITLivro extends Livro {
    constructor(titulo, autor, paginas, tecnologia) {
       super(titulo, autor, paginas)
        this.tecnologia = tecnologia;
    }
}

let itLivro = new ITLivro("algoritmos","Arthur", 500, 'Logica de programação');
console.log(itLivro.titulo);