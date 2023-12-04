import { View } from "./view.js";

export class MensagemView extends View<string>{
    
    constructor(selector: string){
        // this.elemento = document.querySelector(selector);
        super(selector);
    }

    protected template(model: string):string{
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}