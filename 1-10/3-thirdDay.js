//3º Dia: Faça um Programa que peça dois números e imprima a soma.

console.log("Vamos somar!")

const entrada = require("prompt-sync")({sigint: true});

const num1 = Number(entrada("Escolha o primeiro numero: "));
const num2 = Number(entrada("Escolha o segundo numero: "));

const soma = num1 + num2;

console.log(`O resultado da soma de ${num1} + ${num2} é ${soma}!`);
