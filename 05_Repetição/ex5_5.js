const promt = require("prompt-sync")();
const num = Number(promt("Número: "));

let acumulador = '';
let sum = 0;

for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        acumulador += `${i}, `;
        sum += i;
    }
}
console.log(`Divisores de ${num}: ${acumulador}(Soma: ${sum})`);

if (sum === num) {
    console.log(`${num}: é um número perfeito`);
}
