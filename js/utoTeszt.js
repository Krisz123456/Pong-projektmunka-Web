var tesztUtoElem = document.createElement("div");
tesztUtoElem.id = "teszt-uto";
tesztUtoElem.style.cssText = "position:absolute; top:0; left:0; width:10px; height:80px; visibility:hidden;";
document.body.appendChild(tesztUtoElem);

var tesztUto = new Uto("#teszt-uto", 10);

console.assert(tesztUto.getMagassag() === 80, "Hiba a getMagassag() metódusban, mert nem az elem magasságát adja vissza!");

tesztUto.kozepre(400);
console.assert(tesztUtoElem.style.transform == "translateY(160px)", "Hiba a kozepre() metódusban, mert az ütő nem a pálya közepére kerül!");

tesztUto.mozog(-1, 400);
console.assert(tesztUtoElem.style.transform == "translateY(150px)", "Hiba a mozog() metódusban, mert felfelé nem a sebességgel mozdul el!");

for (var j = 0; j < 100; j++) {
    tesztUto.mozog(1, 400);
}
console.assert(tesztUtoElem.style.transform == "translateY(320px)", "Hiba a mozog() metódusban, mert az ütő kimegy a pálya alján!");

tesztUtoElem.remove();