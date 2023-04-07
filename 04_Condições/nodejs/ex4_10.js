const promt = require("prompt-sync")();
const numero = Number(promt("Número: "));

numero % 2 === 0 ? console.log(`${numero} é par.`) : console.log(`${numero} é impar.`);
