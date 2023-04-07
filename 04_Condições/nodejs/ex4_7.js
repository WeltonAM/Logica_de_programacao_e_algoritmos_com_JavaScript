const promt = require("prompt-sync")();
const pessoas = Number(promt("Nº de pessoas: "));
const peixes = Number(promt("Nº de peixes: "));

let pagar;

if (peixes <= pessoas) {
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12);
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`);
