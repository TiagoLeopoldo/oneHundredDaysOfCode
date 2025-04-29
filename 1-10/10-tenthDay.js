//10º Dia:. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Farenheit.

console.log("Vamos converter de Celsius para Farenheit!");

const entrada = require("prompt-sync")({sigint: true});

const temperaturaC = Number(entrada("Informa a temperatura em Celsius para ser convertida: "));
const temperaturaF = (temperaturaC * 1.8) + 32;

console.log((`O resultado da conversão de ${temperaturaC.toFixed(1)}°C para Farenheit é de ${temperaturaF.toFixed(1)}°F.`))