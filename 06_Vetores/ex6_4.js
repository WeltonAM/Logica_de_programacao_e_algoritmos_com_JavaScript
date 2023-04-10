const propmt = require("prompt-sync")();
console.log("Informe o valor dos saques ou '0' para sair.");

const saques = [];

do {
    const valor = Number(propmt("Saque R$: "));

    if (valor == 0) {
        break;
    }

    saques.push(valor);

    if (valor % 10 == 0) {
        console.log('Saque Realizado com Sucesso.');
    } else {
        console.log('Erro... Valor Inválido (Só notas de R$10,00).');
    }
} while (true)

console.log('\nSaques Válidos');
console.log('-'.repeat(40));

const saquesValidos = saques.filter(saque => saque % 10 == 0);

saquesValidos.map(saque => {
    console.log(saque.toFixed(2));
});

console.log('-'.repeat(40));
const totalSacado = saquesValidos.reduce((total, saque) => total + saque, 0);

console.log(`Total dos Saques: R$ ${totalSacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saquesValidos.length;
console.log(`Nº de tentativas de saques inválidos: ${saquesInvalidos}`);