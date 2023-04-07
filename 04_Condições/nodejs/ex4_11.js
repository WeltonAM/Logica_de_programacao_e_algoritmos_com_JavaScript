const promt = require("prompt-sync")();
const velocidadePermitida = Number(promt("Velocidade Permitida: "));
const velocidadeDoCondutor = Number(promt("Velocidade do condutor: "));

const vintePorCento = velocidadePermitida * 0.2;
const diferenca = velocidadeDoCondutor - velocidadePermitida;

if (diferenca <= 0) {
    console.log('Sem multa.');
    return;
}

diferenca <= vintePorCento ? console.log("Situação: Multa Leve") : console.log("Situação: Multa Grave");