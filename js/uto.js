class Uto {
    #y = 0;
    #sebesseg;
    #element;

    constructor(selector, sebesseg) {
        this.setElement(selector);
        this.setSebesseg(sebesseg);
    }

    setElement(selector) {
        this.#element = document.querySelector(selector);
    }

    setSebesseg(sebesseg) {
        this.#sebesseg = sebesseg;
    }

    getMagassag() {
        return this.#element.offsetHeight;
    }

    getRect() {
        return this.#element.getBoundingClientRect();
    }

    kozepre(palyaMagassag) {
        this.#y = (palyaMagassag - this.getMagassag()) / 2;
        this.rajzol();
    }

    mozog(irany, palyaMagassag) {
        this.#y += irany * this.#sebesseg;
        this.#y = Math.max(0, Math.min(palyaMagassag - this.getMagassag(), this.#y));
        this.rajzol();
    }

    rajzol() {
        this.#element.style.transform = "translateY(" + this.#y + "px)";
    }
}