const propmt = require("prompt-sync")();
console.log("Informe frase para verificar se é palíndromo.");

const frase = propmt("Mensagem: ");

const fraseSemEspaco = frase.replace(/ /g, "");

let iguais = true;
for (let i = 0; i < fraseSemEspaco.length / 2; i++) {
    console.log(fraseSemEspaco[fraseSemEspaco.length - 1 - i]);
    if (fraseSemEspaco[i] != fraseSemEspaco[fraseSemEspaco.length - 1 - i]) {
        iguais = false;
        break;
    }
}

if (iguais) {
    console.log(`'${frase}' é um Palíndromo`);
} else {
    console.log(`'${frase}' não é um Palíndromo`);
}