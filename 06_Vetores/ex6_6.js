const propmt = require("prompt-sync")();
console.log("Informe os números ou digite 0 para sair.");

const numeros = [];

do {
    const numero = Number(propmt("Numero: "));

    if (numero === 0) {
        break;
    }

    numeros.push(numero);

    console.log('Numero adicionado.');
} while (true)

let maior = false;

for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
        maior = true;
        break;
    }
}

maior ? console.log('Números não estão em ordem crescente.') : console.log('Números estão em ordem crescente.');