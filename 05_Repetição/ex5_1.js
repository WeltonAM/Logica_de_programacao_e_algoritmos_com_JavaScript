const promt = require("prompt-sync")();
const numero = Number(promt("Número: "));

let temDivisor = 0;
for (let i = 2; i <= numero / 2; i++) {
    if (numero % i === 0) {
        temDivisor = 1;
        break;
    }
}

if (numero > 1 && !temDivisor) {
    console.log(`${numero} é primo.`)
} else {
    console.log(`${numero} não é primo.`)
}