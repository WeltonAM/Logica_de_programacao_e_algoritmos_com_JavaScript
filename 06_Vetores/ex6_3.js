const propmt = require("prompt-sync")();
console.log("Informe os clientes em ordem de chegada ou 'Fim' no nome para sair.");

const clientes = [];

do {
    const nome = propmt("Nome: ");

    if (nome == 'Fim') {
        break;
    }

    const idade = Number(propmt("Idade: "));
    clientes.push({ nome, idade });
    console.log('Ok! Cliente inserido na fila...');
} while (true)

console.log('\nFila Preferencial');
console.log('-'.repeat(40));

const filaPref = clientes.filter(cliente => cliente.idade >= 60);

filaPref.map((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
});

console.log('\nFila Normal');
console.log('-'.repeat(40));

const filaNormal = clientes.filter(cliente => cliente.idade < 60);
filaNormal.map((fila, i) => {
    console.log(`${i + 1}. ${fila.nome}`);
});