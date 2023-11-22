import { Negociacao } from "./negociacao";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];
    // essa declaração é equivalente a
    // private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    lista(): readonly Negociacao[]{
        // essa declaração equivalente a
        // lista(): ReadOnlyArray <Negociacao>
        return this.negociacoes;
    }
}

