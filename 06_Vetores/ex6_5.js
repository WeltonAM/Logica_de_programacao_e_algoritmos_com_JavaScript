const propmt = require("prompt-sync")();
console.log("Informe os times ou digite 'Fim' para sair.");

const times = [];

do {
    const time = propmt("Time: ");

    if (time == 'Fim') {
        break;
    }

    times.push(time);

    console.log('Time adicionado à tabela.');
} while (true)

if (times.length !== 0 || times.length % 2 !== 0) {
    console.log('-'.repeat(40));
    console.log('\nTimes: ');
    times.map(time => console.log(time));

    console.log('-'.repeat(40));
    console.log('\nTabela: ');

    for (let i = 0; i < times.length / 2; i++) {
        console.log(`${times[i]} x ${times[(times.length - 1) - i]}`);
    };
} else {
    console.log('Informações inválidas.');
    return;
}

