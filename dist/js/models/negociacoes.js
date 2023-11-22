export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // essa declaração é equivalente a
    // private negociacoes: Array<Negociacao> = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        // essa declaração equivalente a
        // lista(): ReadOnlyArray <Negociacao>
        return this.negociacoes;
    }
}
