// 19º Dia: Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

const entrada = require("prompt-sync")({sigint: true});

const obterNumeroValido = (informacao) => {
  let numero;
  do {
    numero = Number(entrada(informacao));
    if (Number.isNaN(numero)) {
      console.log("Informação inválida, tente novamente.")
    }
  } while (Number.isNaN(numero));
  return numero;
};


const executarPrograma = () => {
  const numeroInformado = obterNumeroValido("Informe um valor numérico para saber se ele é negativo ou positivo: ");

  if (numeroInformado === 0) {
    console.log(`O número informado é neutro, você informou o número 0.`);
  } else if (numeroInformado < 0) {
    console.log(`O número informado é negativo, você informou o número ${numeroInformado}.`)
  } else {
    console.log(`O número informado é positivo, você informou o número ${numeroInformado}.`)
  }
}

executarPrograma();