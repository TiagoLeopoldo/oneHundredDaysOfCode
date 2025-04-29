// 13º Dia: João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.


const entrada = require("prompt-sync")({sigint: true});

const calcularMulta = (peso) => {
  const limiteDePeso = 50;
  const multaPorKg = 4;

  let excesso = 0;
  let valorDaMulta = 0;

  if (peso > limiteDePeso) {
    excesso = peso - limiteDePeso;
    valorDaMulta = excesso * multaPorKg;
  }

  return {excesso, valorDaMulta};
};

const executarPrograma = () => {
  const peso = parseFloat(entrada("Informe o peso total de peixes pescados em Kg: "));

  if (isNaN(peso) || peso <= 0) {
    console.log("Valor informado não é válido, por favor informe outro valor.")
    return;
  }

  const {excesso, valorDaMulta} = calcularMulta(peso);

  console.log(`O peso total da pesca foi de ${peso.toFixed(2)}Kg.`)

  if (excesso > 0) {
    console.log(`O peso excedeu o limite estabelecido em ${excesso.toFixed(2)}Kg, o valor da multa será de R$${valorDaMulta.toFixed(2)}.`)
  } else {
    console.log("Não há quantidade de peso excedida.")
  }
};

executarPrograma();