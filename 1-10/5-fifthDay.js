//5º Dia: Faça um Programa que converta metros para centímetros.

console.log("Convertendo metros para centimetros!");

const entrada = require("prompt-sync")({sigint: true});
const medidaM = entrada("Informe qual metragem você precisa converter para centímetros: ");

const medidaCm = medidaM * 100;
console.log(`Convertendo ${medidaM} metros em centímetros, ficará ${medidaCm.toFixed(2)} centímetros.`)