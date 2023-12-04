import { View } from "./view.js";
export class MensagemView extends View {
    constructor(selector) {
        // this.elemento = document.querySelector(selector);
        super(selector);
    }
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
