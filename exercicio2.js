class Cidade{
    qntdHabitantes = 11900000;
    nome = "São Paulo";
    estado = "SP";

    mostrar(){
        console.log(this.qntdHabitantes + this.nome + this.estado);
    }
}

const cidade1 = new Cidade();
//cidade.nome = "Rio de Janeiro";
cidade1.mostrar();