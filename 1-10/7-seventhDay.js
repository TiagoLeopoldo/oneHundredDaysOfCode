//7º Dia: Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.

console.log("Vamos calcular a área do quadrado! E dobraremos o valor da área!");

const entrada = require('prompt-sync')({sigint: true});
const tamanhoLado = Number(entrada("Informe o tamanho dos lados em cm: "));

const areaDoQuadrado = Math.pow(tamanhoLado,2);
const dobroDaAreaDoQuadrado = areaDoQuadrado * 2;

console.log(`O tamanho da área do quadrado é de ${areaDoQuadrado} cm² e o dobro de seu tamanho é ${dobroDaAreaDoQuadrado} cm²`);