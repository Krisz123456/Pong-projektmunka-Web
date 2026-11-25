
class Labda {
    #x = 0;
    #y = 0;
    #vx = 0;
    #vy = 0;
    #sebesseg;
    #sugar;
    #element;

    constructor(selector, sebesseg) {
        this.setElement(selector);
        this.setSebesseg(sebesseg);
        this.#sugar = this.#element.offsetWidth / 2;
    }

    setElement(selector) {
        this.#element = document.querySelector(selector);
    }

    setSebesseg(sebesseg) {
        this.#sebesseg = sebesseg;
    }

    setX(x) {
        this.#x = x;
    }

    getX() {
        return this.#x;
    }

    getY() {
        return this.#y;
    }

    getVx() {
        return this.#vx;
    }

    getSugar() {
        return this.#sugar;
    }


     kozepre(palyaSzelesseg, palyaMagassag, irany) {
        this.#x = palyaSzelesseg / 2;
        this.#y = palyaMagassag / 2;

        var szog = (Math.random() * 60 - 30) * Math.PI / 180;
        this.#vx = irany * Math.cos(szog) * this.#sebesseg;
        this.#vy = Math.sin(szog) * this.#sebesseg;

        this.rajzol();
    }

    mozog(palyaMagassag) {
        this.#x += this.#vx;
        this.#y += this.#vy;
}

        this.rajzol();
    }


    visszaut(irany, relativ) {
        relativ = Math.max(-1, Math.min(1, relativ));
        var szog = relativ * 60 * Math.PI / 180;

        this.#vx = irany * Math.cos(szog) * this.#sebesseg;
        this.#vy = Math.sin(szog) * this.#sebesseg;
    }
