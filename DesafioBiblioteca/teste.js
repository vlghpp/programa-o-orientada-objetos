let arrayDeLivros = [];
class Livro{
    titulo
    editora
    constructor(titulo, editora){
        this.titulo = titulo;
        this.editora = editora;
    }
}
let titulo = 'Harry Potter'
let editora = 'J.K. Rolling'

let livros = new Livro(titulo, editora)
arrayDeLivros.push(livros);

console.log(arrayDeLivros[0].titulo)