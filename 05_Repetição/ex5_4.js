const promt = require("prompt-sync")();
let chinchilas = Number(promt("Nº de Chinchilas: "));
const anos = Number(promt("Anos: "));

for (let i = 1; i <= anos; i++) {
    console.log(`${i}º Ano: ${chinchilas} Chinchilas`);
    chinchilas *= 3;
}
