const propmt = require("prompt-sync")();
console.log("Informe os alunos. Após, digite 'Fim' no nome para sair.");

const alunos = [];

do {
    const nome = propmt("Nome: ");

    if (nome == 'Fim') {
        break;
    }

    const nota = Number(propmt("Nota: "));
    alunos.push({ nome, nota });
    console.log('Ok! Aluno(a) cadastrado(a).');
} while (true)

console.log('-'.repeat(40));

const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0)
console.log(`Maior Nota: ${maior}`);

if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota == maior);

    for (const destaque of destaques) {
        console.log(`Aluno(a) - ${destaque.nome}`);
    }
} else {
    console.log("Não há alunos em destaque na turma.");
}