var utoBal = document.querySelector('#uto-bal');
var utoJobb = document.querySelector('#uto-jobb');

var sebesseg = 6;
var gombok = {};
var balY = 0;
var jobbY = 0;

var palya = utoBal.parentElement.getBoundingClientRect();
var balKezdo = utoBal.getBoundingClientRect().top - palya.top;
var jobbKezdo = utoJobb.getBoundingClientRect().top - palya.top;

document.addEventListener('keydown', function (e) {
    gombok[e.key] = true;
});

document.addEventListener('keyup', function (e) {
    gombok[e.key] = false;
});

function ciklus() {
    if (gombok['w']) balY -= sebesseg;
    if (gombok['s']) balY += sebesseg;
    if (gombok['ArrowUp']) jobbY -= sebesseg;
    if (gombok['ArrowDown']) jobbY += sebesseg;

    var magassag = palya.height - utoBal.offsetHeight;
    balY = Math.max(-balKezdo, Math.min(magassag - balKezdo, balY));
    jobbY = Math.max(-jobbKezdo, Math.min(magassag - jobbKezdo, jobbY));

    utoBal.style.transform = 'translateY(' + balY + 'px)';
    utoJobb.style.transform = 'translateY(' + jobbY + 'px)';

    requestAnimationFrame(ciklus);
}

ciklus();