const prompt = require('prompt-sync')()
const peso = Number(prompt("Peso da ração (kg): "))
const consumo = Number(prompt("Consumo diário (gr): "))

const pesoGr = Math.floor(peso * 1000)
const duracao = Math.floor(pesoGr / consumo)
const acressimo = pesoGr % consumo
console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${acressimo} gr`);