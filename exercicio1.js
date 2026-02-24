class Livros{
    autora = "J.K. Rowling";
    titulo = "Harry Potter e a Pedra Filosofal";
    ano = 1997;
    edicao = 1;
    editora = "Rocco";
    quantidadePaginas = 223;
    quantidadeCapitulos = 17;
    genero = "Fantasia";

    ler(){
        console.log("Estou lendo o livro");
    }
    break(){
        console.log("Estou fazendo uma pausa na leitura");
    }
}

const livro1 = new Livros();
livro1.ler();
livro1.break();