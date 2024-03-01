/*
1 - Crie uma classe Livro com as seguintes propriedades:
Titulo - qual o nome do livro;
Autor- quem escreveu o livro;
Editora - qual empresa que publicou o livro;
Ano de publicação - o ano em que o livro foi publicado;
Disponibilidade - se o livro está disponível ou não (verdadeiro ou falso);

2 - Crie um método construtor para a classe Livro que recebe como parâmetro as informações que serão atribuídas as propriedades, com exceção de “Disponibilidade” que deve ter por padrão o valor “true” quando o objeto for criado
3 - Crie alguns objetos da classe Livro e adicione-os em um array;

4 - Crie uma classe Biblioteca com as seguintes propriedades:
    - Nome - nome da biblioteca;

    - Endereco - onde a biblioteca fica localizada;

    - Telefone - telefone de contato da biblioteca;

    - Acervo de livros - todos os livros que existem na biblioteca

5 - Crie um método construtor para a classe Biblioteca que deve receber como parâmetro as informações que serão atribuídas as propriedades, a propriedade Acervo de Livros deve receber um array;
6 - Adicione na classe Biblioteca um método para buscar um livro específico, deve passar como parâmetro o nome do livro e exibir no console todas as informações de um livro;
7 - Adicione na classe Biblioteca um método de empréstimo de um livro, deve ser passado como parâmetro o nome do livro, então verificar a disponibilidade e se estiver disponível retornar true e trocar o valor da propriedade do livro para false, se não estiver disponível retornar false.
8 - Adicione na classe Biblioteca um método de devolução de um livro, deve ser passado como parâmetro o nome do livro, então trocar o valor da propriedade de disponibilidade desse livro para true;
9 - Crie um objeto da classe Biblioteca e chame seus métodos.
 */





class Livro {
    constructor(titulo, autor, editora, anopublicacao) {
        this.Titulo = titulo;
        this.Editora = editora;
        this.Autor = autor;
        this.AnoPublicacao = anopublicacao;
        this.Disponibilidade = true;
    }
}

class Biblioteca {
    constructor(nome, endereço, telefone, AcervoDeLivros) {
        this.Nome = nome;
        this.Endereço = endereço;
        this.Telefone = telefone;
        this.AcervoDeLivros = AcervoDeLivros; // Deve receber um array
    }

    buscarLivro(nomeLivro) {
        for (let c = 0; c < this.AcervoDeLivros.length; c++) {
            if (this.AcervoDeLivros[c].Titulo == nomeLivro) {
                console.log(this.AcervoDeLivros[c]);
            }
        }
    }

    emprestaLivro(nomeLivro) {
        for (let c = 0; c < this.AcervoDeLivros.length; c++) {
            if (this.AcervoDeLivros[c].Titulo == nomeLivro) {
                if (this.AcervoDeLivros[c].Disponibilidade == true) {
                    alert("O livro desejado está disponível, mas agora foi emprestado a você!");
                    this.AcervoDeLivros[c].Disponibilidade = false;
                } else {
                    alert("O livro não se encontra disponível, por favor, tente mais tarde!");
                }
                return;
            }
        }
        alert("Título de livro não encontrado. Favor rever!");
    }

    devolveLivro(nomeLivro) {
        for (let c = 0; c < this.AcervoDeLivros.length; c++) {
            if (this.AcervoDeLivros[c].Titulo == nomeLivro) {
                if (this.AcervoDeLivros[c].Disponibilidade == false) {
                    alert("Obrigado por devolver nosso livro!");
                    this.AcervoDeLivros[c].Disponibilidade = true;
                }
                return;
            }
        }
        alert("Título de livro não encontrado no nosso acervo. Favor rever!");
    }
}

function popularLivro(titulo, autor, editora, anopublicacao) {
    let livros = new Livro(titulo, autor, editora, anopublicacao);
    arrayDeLivros.push(livros);
}

function identificacaoUsuario() {
    alert("Agora precisamos que você se identifique! ");
    let nomeUsuario = prompt("Qual é seu nome ?");
    let telefoneUsuario = prompt("Qual é seu telefone? ");
    let endereçoUsuario = prompt("Qual é seu endereço? ");
    biblioteca.Nome = nomeUsuario;
    biblioteca.Telefone = telefoneUsuario;
    biblioteca.Endereço = endereçoUsuario;
}

function perguntaNomeLivro() {
    let nomeLivro = prompt("Qual é o nome do livro? ");
    return nomeLivro;
}

let biblioteca = new Biblioteca(nomeUsuario, endereçoUsuario, telefoneUsuario, arrayDeLivros);
let arrayDeLivros = []; // Cria um array para guardarmos todos os livros do nosso acervo
let adicionarMais = true; // Variável para interromper o while

while (adicionarMais) {
    let titulo = prompt("Qual o título do seu livro? ");
    let autor = prompt("Qual o nome do seu autor? ");
    let editora = prompt("Qual é a editora do livro? ");
    let anopublicacao = prompt("Qual é o ano de publicação? ");
    adicionarMais = confirm("Deseja continuar? [OK -> SIM / CANCELAR -> NÃO]");
    if (!adicionarMais) {
        popularLivro(titulo, autor, editora, anopublicacao);
    }
}

identificacaoUsuario(); // Puxa as informações do usuário

let opcaoUsuario = prompt("O que você deseja fazer no nosso sistema? [Buscar Livro / Alugar Livro / Devolver Livro? ").toUpperCase();

switch (opcaoUsuario) {
    case "BUSCAR LIVRO":
        biblioteca.buscarLivro(perguntaNomeLivro());
        break;

    case "ALUGAR LIVRO":
        biblioteca.emprestaLivro(perguntaNomeLivro());
        break;

    case "DEVOLVER LIVRO":
        biblioteca.devolveLivro(perguntaNomeLivro());
        break;

    default:
        alert("Opção não localizada!");
        break;
}
