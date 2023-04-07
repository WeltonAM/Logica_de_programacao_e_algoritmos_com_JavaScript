const promt = require("prompt-sync")();
const ladoA = Number(promt("Lado A: "));
const ladoB = Number(promt("Lado B: "));
const ladoC = Number(promt("Lado C: "));

const lado1 = ladoA + ladoB;
const lado2 = ladoA + ladoC;
const lado3 = ladoC + ladoB;

if (ladoC > lado1 && ladoB > lado2 && ladoA > lado3) {
    console.log("Lados não formam um triângulo");
    return;
}

console.log("Lados podem formar um triângulo");

if (lado1 === lado2 && lado1 === lado3) {
    console.log("Tipo: equilátero");
} else if (lado1 === lado2 || lado1 === lado3) {
    console.log("Tipo: isóceles");
} else {
    console.log("Tipo: escaleno");
}

