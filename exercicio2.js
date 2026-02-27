/*Crie duas classes:
 Tarefa com titulo, descricao, concluida (boolean, inicia
false) e métodos concluir() e reabrir().
 ListaTarefas que possui:
o adicionar(tarefa),
o removerPorTitulo(titulo),
o listar(concluidas = null) → retorna todas, só
concluídas (true) ou só pendentes (false)
Crie 3 tarefas, conclua 1, remova 1 e liste as restantes
(todas e filtradas).*/ 

class Tarefa{
    titulo;
    descricao;
    concluida = false;
    constructor(titulo, descricao){
        this.titulo = titulo;
        this.descricao = descricao;
    } 
    concluir(){
        this.concluida = true;
    }
    reabrir(){
        this.concluida = false;
    }
}

class ListaTarefas{
    tarefas = [];

    adicionar(tarefa){
        this.tarefas.push(tarefa);
    }
}
    removerPorTitulo(titulo){
        this.tarefas = this.tarefas.filter(tarefa => tarefa.titulo !== titulo);
    }

    listar(concluidas = null){
         if(concluidas === null){
            return this.tarefas;
        }
        return this.tarefas.filter(tarefa => tarefa.concluida === concluidas);          
    }
const tarefa1= new Tarefa('Comprar leite', 'Ir ao supermercado e comprar leite');  
const tarefa2 = new Tarefa('Estudar JavaScript', 'Assistir aulas e praticar exercícios');
const tarefa3 = new Tarefa('Limpar a casa', 'Arrumar os cômodos e lavar a louça');          
       
const listaTarefas = new ListaTarefas();
listaTarefas.adicionar(tarefa1);
listaTarefas.adicionar(tarefa2);
listaTarefas.adicionar(tarefa3);

tarefa1.concluir();

console.log('Todas as tarefas:', listaTarefas.listar());
console.log('Tarefas concluídas:', listaTarefas.listar(true));
console.log('Tarefas pendentes:', listaTarefas.listar(false));

listaTarefas.removerPorTitulo('Estudar JavaScript');
console.log('Após remover "Estudar JavaScript":', listaTarefas.listar());