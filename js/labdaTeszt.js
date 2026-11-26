var tesztLabdaElem = document.createElement("div");
tesztLabdaElem.id = "teszt-labda";
tesztLabdaElem.style.cssText = "position:absolute; top:0; left:0; width:20px; height:20px; visibility:hidden;";
document.body.appendChild(tesztLabdaElem);

var tesztLabda = new Labda("#teszt-labda", 5);

console.assert(tesztLabda.getSugar() === 10, "Hiba a konstruktorban, mert a sugár nem az elem szélességének fele!");

tesztLabda.kozepre(800, 400, 1);
console.assert(tesztLabda.getX() === 400 && tesztLabda.getY() === 200, "Hiba a kozepre() metódusban, mert nem a pálya közepére kerül a labda!");