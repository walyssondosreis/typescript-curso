
export class Negociacao{
    // Declara atributos privados no JS
    // #data; 
    // #quantidade;
    // #valor;

    // Declara atributos privados no TS
    private _data;
    private _quantidade;
    private _valor;

    constructor(data,quantidade,valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(){
        return this._data;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
    
}