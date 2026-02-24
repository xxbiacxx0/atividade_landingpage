class Bicicleta {
    #modelo = 'Aro 29';
    #marca = 'Caloi';
    #cor = 'Vermelho/preto';
    #velocidadeMaxima = 35;

    setmodelo(valor){
        this.#modelo = valor;
    }
    getmodelo(){
        return this.#modelo;
    }

    setmarca(valor){
        this.#marca = valor;
    }
    getmarca(){
        return this.#marca;
    }

    setcor(valor){
        this.#cor = valor;
    }
    getcor(){
        return this.#cor;
    }

    setvelocidadeMaxima(valor){
        if (valor > 35){
            console.log("Não é possível inserir uma velocidade maior que 35km/h");
        }        else
        this.#velocidadeMaxima = valor;
    }
    getvelocidadeMaxima(){
        return this.#velocidadeMaxima;
    }
    }

const caloi = new Bicicleta(); 
caloi.setmarca('Caloi');
console.log(caloi.getmarca());

caloi.setcor('vermelho/preto');
console.log(caloi.getcor());

caloi.setvelocidadeMaxima(30);
console.log(caloi.getvelocidadeMaxima());

caloi.setmodelo('Aro 29');
console.log(caloi.getmodelo());