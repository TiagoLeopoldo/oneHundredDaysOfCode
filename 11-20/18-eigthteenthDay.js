// 18º Dia: Faça um Programa que peça dois números e imprima o maior deles.

const entrada = require("prompt-sync")({ sigint: true });

const obterNumeroValido = (informacao) => {
  let numero;
  do {
    numero = parseInt(entrada(informacao));
    if (isNaN(numero)) {
      console.log("Valor inválido. Tente novamente");
    };
  } while (isNaN(numero));
  return numero;
};

const executarPrograma = () => {
  const primeiroNumero = obterNumeroValido("Informe o primeiro número, ele deve ser um número inteiro: ");
  const segundoNumero = obterNumeroValido("Informe o segundo número, ele deve ser um número inteiro: ");

  console.log(`O maior número é ${Math.max(primeiroNumero, segundoNumero)}.`);
};

executarPrograma();
