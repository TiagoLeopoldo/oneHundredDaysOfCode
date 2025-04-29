//4º Dia: Faça um Programa que peça as 4 notas bimestrais e mostre a média.

console.log("Calculando a média bimestral!")

const entrada = require("prompt-sync")({sigint: true});

const nota1 = Number(entrada("Qual a primeira nota: "));
const nota2 = Number(entrada("Qual a segunda nota: "));
const nota3 = Number(entrada("Qual a terceira nota: "));
const nota4 = Number(entrada("Qual a quarta nota: "));

const media = (nota1 + nota2 + nota3 + nota4)/4

console.log(`A média das notas ${nota1}, ${nota2}, ${nota3} e ${nota4} é ${media.toFixed(2)}!`)