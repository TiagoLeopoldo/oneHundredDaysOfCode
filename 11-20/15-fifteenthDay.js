// 15º Dia: Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

const entrada = require("prompt-sync")({sigint: true});

const calcular = (tamanhoEmMetrosQuadrados) => {
  const precoPorLata = 80.00;
  const rendimentoPorLitro = 3;

  const quantidadeNecessaria = tamanhoEmMetrosQuadrados / rendimentoPorLitro;
  const latasNecessarias = Math.ceil(quantidadeNecessaria / 18);
  const orcamentoFinal = precoPorLata * latasNecessarias;

  return {tamanhoEmMetrosQuadrados, latasNecessarias, orcamentoFinal};
}

const indicarQuantidadeDeTinta = ({tamanhoEmMetrosQuadrados, latasNecessarias, orcamentoFinal}) => {
  if (tamanhoEmMetrosQuadrados <= 0 || isNaN(tamanhoEmMetrosQuadrados)){
    console.log(`Valor informado é inválido, tente novamente.`);
    return
  };

  console.log(`Para pintar ${tamanhoEmMetrosQuadrados}m², você precisará de ${latasNecessarias} lata(s) de tinta.`);
  console.log(`Cada lata custa R$ 80,00, totalizando R$${orcamentoFinal.toFixed(2).replace(".", ",")}.`);
};


const tamanhoEmMetrosQuadrados = parseFloat(entrada("Informe o tamanho do local a ser pintado em m²: "));

if (tamanhoEmMetrosQuadrados <= 0 || isNaN(tamanhoEmMetrosQuadrados)) {
  console.log(`Valor informado não é valido, tente novamente.`);
} else {
  const resultado = calcular(tamanhoEmMetrosQuadrados);
  indicarQuantidadeDeTinta(resultado);
};