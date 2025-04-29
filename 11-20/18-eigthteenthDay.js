// 18º Dia: Faça um Programa que peça dois números e imprima o maior deles.

const entrada = require("prompt-sync")({ sigint: true });

const verificarOMaior = (primeiroNumero, segundoNumero) => {
  let maior = primeiroNumero > segundoNumero ? primeiroNumero : segundoNumero;
  return maior;
};

const informarNumero = (maior) => {
  console.log(`O maior número é ${maior}.`);
};

const executarPrograma = () => {
  const primeiroNumero = parseInt(entrada("Informe o primeiro número, ele deve ser um número inteiro: "));

  if (isNaN(primeiroNumero)) {
    console.log("O primeiro valor informado é inválido.");
    return;
  }

  const segundoNumero = parseInt(entrada("Informe o segundo número, ele deve ser um número inteiro: "));
  if (isNaN(segundoNumero)) {
    console.log("O segundo valor informado é inválido.");
    return;
  }
  
  const maiorNumero = verificarOMaior(primeiroNumero, segundoNumero);
  informarNumero(maiorNumero);
};

executarPrograma();
