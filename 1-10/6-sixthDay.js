//6º Dia: Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
console.log("Vamos calcular a área de um circulo!")

const entrada = require("prompt-sync")({sigint: true});
const raio = Number(entrada("Informe o raio do círculo em centímetros: "));
const area = Math.PI * Math.pow(raio, 2);

console.log(`A área do círculo é de ${area.toFixed(2)} cm²`);