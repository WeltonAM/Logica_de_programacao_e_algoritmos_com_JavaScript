const promt = require("prompt-sync")();
const valor = Number(promt("Valor: "));

let tempo;
let troco;
if (valor >= 3) {
    tempo = 120;
    troco = valor - 3;
} else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
} else if (valor >= 1) {
    tempo = 30;
    troco = valor - 1;
} else {
    console.log("Valor insuficiente")
}

console.log(`Tempo: ${tempo}`);

if (troco !== 0) {
    console.log(`Troco: ${troco}`);
}