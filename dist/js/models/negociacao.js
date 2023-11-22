export class Negociacao {
    // Declara atributos privados no JS
    // #data; 
    // #quantidade;
    // #valor;
    // Declara atributos privados no TS
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
