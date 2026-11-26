var tesztUtoElem = document.createElement("div");
tesztUtoElem.id = "teszt-uto";
tesztUtoElem.style.cssText = "position:absolute; top:0; left:0; width:10px; height:80px; visibility:hidden;";
document.body.appendChild(tesztUtoElem);

var tesztUto = new Uto("#teszt-uto", 10);

console.assert(tesztUto.getMagassag() === 80, "Hiba a getMagassag() metódusban, mert nem az elem magasságát adja vissza!");