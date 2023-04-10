const propmt = require("prompt-sync")();
console.log("Informe os dados do candidato ou digite 'Fim' para sair.");

const candicatos = [];

do {
    const nome = propmt("Nome: ");

    if (nome === 'Fim') {
        break;
    }

    const nota = Number(propmt("Nota: "));
    candicatos.push({ nome, nota });

    console.log('Ok! Candidato adicionado.');
} while (true)

const media = Number(propmt("Média: "));

console.log('\nLista de aprovados para 2ª fase:');
console.log('-'.repeat(40));

const candidatosFiltered = candicatos.filter((candicato) => candicato.nota > media);

candidatosFiltered.map((candicato) => console.log(`- ${candicato.nome}`));
