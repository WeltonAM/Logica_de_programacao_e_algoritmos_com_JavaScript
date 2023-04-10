const propmt = require("prompt-sync")();
console.log("Nome completo separado com espaços.");

const nome = propmt("Nome: ").trim();

if (!nome.includes(" ")) {
    console.log("Informe o nome completo...");
    return;
}

const primeiroNome = nome.indexOf(" ");
const ultimoNomeb = nome.lastIndexOf(" ");
const cracha = nome.substring(0, primeiroNome) + nome.substring(ultimoNomeb);

console.log(`Crachá: ${cracha}`);
