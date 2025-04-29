//8º Dia: Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

console.log("Vamos calcular seu salário mensal de acordo com a hora remunerada?")

const entrada = require("prompt-sync")({sigint: true});

const ganhoPorHora = Number(entrada("Informe sua remuneração por hora: R$"));
const horasTrabalhadasMensais = Number(entrada("Informe o número de horas trabalhadas no mês: "));

const salarioMensal = ganhoPorHora * horasTrabalhadasMensais;

console.log(`Calculando seu salário mensal e suas horas trabalhadas, é correto afimar que você ganha R$${salarioMensal.toFixed(2)} por mês.`);
