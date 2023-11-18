
export class NegociacaoController{
    private inputValor;
    private inputData;
    private inputQuantidade;

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputValor = document.querySelector('#valor');
        this.inputQuantidade = document.querySelector('#quantidade');

    }
    adiciona(){
        console.log(this.inputData);
        console.log(this.inputValor);
        console.log(this.inputQuantidade);
    }
}