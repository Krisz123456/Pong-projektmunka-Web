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

    esemenyek() {
        document.addEventListener("keydown", (e) => {
            this.#gombok[e.code] = true;
            if (e.code === "ArrowUp" || e.code === "ArrowDown") {
                e.preventDefault();
            }
        });

        document.addEventListener("keyup", (e) => {
            this.#gombok[e.code] = false;
        });
    }

    indit() {
        var p = this.#palya.getBoundingClientRect();
        this.#utoBal.kozepre(p.height);
        this.#utoJobb.kozepre(p.height);
        this.ujLabda(Math.random() < 0.5 ? 1 : -1);
    }

    ujLabda(irany) {
        var p = this.#palya.getBoundingClientRect();
        this.#labda.kozepre(p.width, p.height, irany);

        this.#szunet = true;
        setTimeout(() => {
            this.#szunet = false;
        }, 1000);
    }

    lep() {
        var p = this.#palya.getBoundingClientRect();

        this.#utoBal.mozog((this.#gombok["KeyS"] ? 1 : 0) - (this.#gombok["KeyW"] ? 1 : 0), p.height);
        this.#utoJobb.mozog((this.#gombok["ArrowDown"] ? 1 : 0) - (this.#gombok["ArrowUp"] ? 1 : 0), p.height);

        if (!this.#szunet) {
            this.#labda.mozog(p.height);
            this.utesVizsgalat(p);
            this.pontEllenorzes(p);
        }
    }

    utesVizsgalat(p) {
        var bal = this.#utoBal.getRect();
        var jobb = this.#utoJobb.getRect();
        var l = this.#labda;
        var r = l.getSugar();

        var balJobbSzel = bal.right - p.left;
        var balTeteje = bal.top - p.top;
        if (l.getVx() < 0 &&
            l.getX() - r <= balJobbSzel &&
            l.getX() + r >= bal.left - p.left &&
            l.getY() + r >= balTeteje &&
            l.getY() - r <= balTeteje + bal.height) {
            l.setX(balJobbSzel + r);
            l.visszaut(1, (l.getY() - (balTeteje + bal.height / 2)) / (bal.height / 2));
        }

        var jobbBalSzel = jobb.left - p.left;
        var jobbTeteje = jobb.top - p.top;
        if (l.getVx() > 0 &&
            l.getX() + r >= jobbBalSzel &&
            l.getX() - r <= jobb.right - p.left &&
            l.getY() + r >= jobbTeteje &&
            l.getY() - r <= jobbTeteje + jobb.height) {
            l.setX(jobbBalSzel - r);
            l.visszaut(-1, (l.getY() - (jobbTeteje + jobb.height / 2)) / (jobb.height / 2));
        }
    }

    pontEllenorzes(p) {
        var r = this.#labda.getSugar();

        if (this.#labda.getX() - r <= 0) {
            Jatek.#pontJobb++;
            this.ujLabda(-1);
        } else if (this.#labda.getX() + r >= p.width) {
            Jatek.#pontBal++;
            this.ujLabda(1);
        }
    }

    labdaElrejt() {
        this.#labda.elrejt();
    }

    static getPontBal() {
        return Jatek.#pontBal;
    }

    static getPontJobb() {
        return Jatek.#pontJobb;
    }

    static resetGame() {
        Jatek.#pontBal = 0;
        Jatek.#pontJobb = 0;
    }
}