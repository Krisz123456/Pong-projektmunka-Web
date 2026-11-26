var tesztLabdaElem = document.createElement("div");
tesztLabdaElem.id = "teszt-labda";
tesztLabdaElem.style.cssText = "position:absolute; top:0; left:0; width:20px; height:20px; visibility:hidden;";
document.body.appendChild(tesztLabdaElem);

var tesztLabda = new Labda("#teszt-labda", 5);

console.assert(tesztLabda.getSugar() === 10, "Hiba a konstruktorban, mert a sugár nem az elem szélességének fele!");

tesztLabda.kozepre(800, 400, 1);
console.assert(tesztLabda.getX() === 400 && tesztLabda.getY() === 200, "Hiba a kozepre() metódusban, mert nem a pálya közepére kerül a labda!");

tesztLabda.visszaut(1, 0);
tesztLabda.mozog(400);
console.assert(tesztLabda.getX() === 405, "Hiba a mozog() metódusban, mert a labda nem a sebességével mozdul el!");

tesztLabda.visszaut(-1, 0);
console.assert(tesztLabda.getVx() === -5, "Hiba a visszaut() metódusban, mert balra ütésnél nem negatív a vízszintes sebesség!");

tesztLabda.kozepre(800, 400, 1);
tesztLabda.visszaut(1, -1);
for (var i = 0; i < 100; i++) {
    tesztLabda.mozog(400);
}