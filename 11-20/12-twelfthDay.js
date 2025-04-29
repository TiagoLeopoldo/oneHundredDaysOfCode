// 12º Dia: Tendo como dado de entrada a altura  de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:

//      1. Para homens: (72.7*h) - 58
//      2. Para mulheres: (62.1*h) - 44.7

console.log("Vamos calcular o peso ideal para homens e mulheres!");

const entrada = require("prompt-sync")({sigint: true});
const altura = parseFloat(entrada("Informe a altura: "));

const homens = (72.7 * altura) - 58;
const mulheres = (62.1 * altura) - 44.7;

console.log(`O peso ideal para homens de ${altura.toFixed(2)}m de altura é ${homens.toFixed(1)}Kg. Já para mulheres com a mesma altura, o peso idal é de ${mulheres.toFixed(1)}Kg.`)