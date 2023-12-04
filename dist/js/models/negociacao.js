export class Negociacao {
    // Declara atributos privados no JS
    // #data; 
    // #quantidade;
    // #valor;
    // Declara atributos privados no TS
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    constructor(_data, _quantidade, valor // Dessa forma eu crio um parametro que é setado apenas uma vez e lido sempre
    ) {
        this._data = _data;
        this._quantidade = _quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get volume() {
        return this._quantidade * this.valor;
    }
}
