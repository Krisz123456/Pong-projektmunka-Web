class Fooldal {
    #gomb;

    constructor(gomb) {
        this.setGomb(gomb);
        this.#gomb.addEventListener("click", () => this.mentes());
    }

    setGomb(gomb) {
        this.#gomb = document.querySelector(gomb);
    }

    mentes() {
        var nehezseg = document.querySelector('input[name="nehezseg"]:checked').value;
        var pont = document.querySelector('input[name="pontok"]:checked').value;

        localStorage.setItem("nehezseg", nehezseg);
        localStorage.setItem("pont", pont);
    }
}

new Fooldal("#uj-jatek");