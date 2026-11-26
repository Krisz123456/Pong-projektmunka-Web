var tesztLabdaElem = document.createElement("div");
tesztLabdaElem.id = "teszt-labda";
tesztLabdaElem.style.cssText = "position:absolute; top:0; left:0; width:20px; height:20px; visibility:hidden;";
document.body.appendChild(tesztLabdaElem);

var tesztLabda = new Labda("#teszt-labda", 5);

console.assert(tesztLabda.getSugar() === 10, "Hiba a konstruktorban, mert a sugár nem az elem szélességének fele!");