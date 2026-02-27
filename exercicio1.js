/*1 - Crie uma classe Produto com nome, preco e estoque.
Requisitos:
 Valide no construtor: preco &gt;= 0 e estoque &gt;= 0, caso
contrário, mostre uma mensagem de erro.
 Método aplicarDesconto(percentual) que reduz o
preço.
 Método valorEmEstoque() que retorna preco *
estoque.
Crie dois produtos, aplique desconto em um e compare.*/ 


class produto{
    nome;
    preco;
    estoque;

    constructor(nome, preco, estoque){
        this.nome = nome;
        if(preco >= 0){
            this.preco = preco;
        }else{
            console.log('Erro: Preço inválido, deve ser maior ou igual a 0');
        }
        if(estoque >= 0){
            this.estoque = estoque;
        }else{
            console.log('Erro: Estoque inválido, deve ser maior ou igual a 0');
        }   
    }

    aplicarDesconto(percentual){
        if(percentual >= 0 && percentual <= 100){
            this.preco -= this.preco * (percentual / 100);
        }else{
            console.log('Erro: Percentual inválido, deve ser entre 0 e 100');
        }
}

    valorEmEstoque(){
        return this.preco * this.estoque;
    }
}

const produto1 = new produto('Camiseta', 50, 10);
const produto2 = new produto('Calça', 100, 5);

produto1.aplicarDesconto(20);

//Comparando os produtos
if(produto1.valorEmEstoque() > produto2.valorEmEstoque()){
    console.log(`${produto1.nome} tem um valor em estoque maior que ${produto2.nome}`);
}else if(produto1.valorEmEstoque() < produto2.valorEmEstoque()){
    console.log(`${produto2.nome} tem um valor em estoque maior que ${produto1.nome}`);
}else{
    console.log(`${produto1.nome} e ${produto2.nome} têm o mesmo valor em estoque`);
}   