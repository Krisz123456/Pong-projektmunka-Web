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