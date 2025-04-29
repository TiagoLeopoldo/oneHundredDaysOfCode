// 11º Dia: Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:

//       1. o produto do dobro do primeiro com metade do segundo .
//       2. a soma do triplo do primeiro com o terceiro.
//       3. o terceiro elevado ao cubo.

const entrada = require("prompt-sync")({sigint: true});

const inteiroUm = parseInt(entrada("Informe um número inteiro: "));
const inteiroDois = parseInt(entrada("Informe outro número inteiro: "));
const real = parseFloat(entrada("Informe um número real: "));

const questaoUm = (inteiroUm * 2) * (inteiroDois / 2);
const questaoDois = (inteiroUm * 3) + real;
const questaoTres = Math.pow(real , 3);

console.log(`Respostas: Questão 1 = ${questaoUm}, Questão 2 = ${questaoDois}, Questão 3 = ${questaoTres.toFixed(2)}.`);