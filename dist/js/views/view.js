export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = this.template(model);
    }
}
