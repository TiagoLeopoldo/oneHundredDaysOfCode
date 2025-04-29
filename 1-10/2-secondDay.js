//2º Dia: Faça um Programa que peça um número e então mostre a mensagem: "O número informado foi [número]".

const entrada = require("prompt-sync")({sigint: true});
const numero = entrada("Informe um numero: ");

console.log(`O numero informado foi ${numero}!`);