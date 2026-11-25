var NEHEZSEGEK = { lassu: 4, normal: 6, gyors: 15 };

var nehezseg = localStorage.getItem("nehezseg") || "normal";
var celPont = parseInt(localStorage.getItem("pont")) || 10;

var gameInterval = null;
var scoreInterval = null;

var pontBalSpan = document.querySelector("#pont-bal");
var pontJobbSpan = document.querySelector("#pont-jobb");
var eredmenyElem = document.querySelector("#eredmeny");

var jatek = new Jatek(".palya", NEHEZSEGEK[nehezseg] || 6);

function start() {
    if (gameInterval == null) {
        Jatek.resetGame();
        jatek.indit();
        scoreListener();
        gameInterval = setInterval(() => {
            jatek.lep();
        }, 16);
    }
}

function scoreListener() {
    scoreInterval = setInterval(() => {
        var pontBal = Jatek.getPontBal();
        var pontJobb = Jatek.getPontJobb();

        pontBalSpan.innerHTML = pontBal;
        pontJobbSpan.innerHTML = pontJobb;

        if (gameInterval != null && (pontBal >= celPont || pontJobb >= celPont)) {
            stop();
            jatek.labdaElrejt();
            eredmenyElem.classList.remove("d-none");
        }
    }, 20);
}