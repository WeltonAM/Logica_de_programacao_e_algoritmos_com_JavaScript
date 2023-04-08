const promt = require("prompt-sync")();
const fruta = promt("Fruta: ");
const num = Number(promt("Repetições: "));

let frase = '';

// let i = 1;
// while (num > i) {
//     frase = frase + fruta + " * ";
//     i++;
// }

for (let i = 1; i < num; i++) {
    frase = frase + fruta + " * ";
}
console.log(frase + fruta);
