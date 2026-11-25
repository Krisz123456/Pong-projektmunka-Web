
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
}