class Jatek {
    #palya;
    #labda;
    #utoBal;
    #utoJobb;
    #gombok = {};
    #szunet = false;

    static #pontBal = 0;
    static #pontJobb = 0;

    constructor(palya, labdaSebesseg) {
        this.setPalya(palya);
        this.#labda = new Labda("#labda", labdaSebesseg);
        this.#utoBal = new Uto("#uto-bal", 7);
        this.#utoJobb = new Uto("#uto-jobb", 7);
        this.esemenyek();
    }

    setPalya(palya) {
        this.#palya = document.querySelector(palya);
    }


}