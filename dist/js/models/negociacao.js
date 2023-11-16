
export class Negociacao{
    // Declara atributos privados
    #data; 
    #quantidade;
    #valor;

    constructor(data,quantidade,valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data(){
        return this.#data;
    }

    get volume(){
        return this.#quantidade * this.#valor;
    }
    
}