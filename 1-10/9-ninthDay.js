//9º Dia: Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus Celsius.

console.log("Vamos converter a unidade de medida equivalente da temperatura informada!");

const entrada = require("prompt-sync")({sigint: true});

const temperaturaF = Number(entrada("Informe a temperatura em °F para converter em °C: "));
const temperaturaC = 5 * (temperaturaF - 32) / 9;

console.log(`O resultado da conversão de ${temperaturaF.toFixed(1)}°F para Celsius é de ${temperaturaC.toFixed(1)}°C.`);


