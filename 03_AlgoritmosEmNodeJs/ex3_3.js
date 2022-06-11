const prompt = require('prompt-sync')()
const salario = Number(prompt("Salário: "))
const tempo = Number(prompt("Tempo (anos): "))
const aumento = Math.floor(tempo / 4)
const acressimo = salario * aumento / 100
console.log(`Número de quadriênios: ${aumento}`);
console.log(`Salário final R$: ${(acressimo + salario).toFixed(2).replace('.', ',')}`);