// // 16º Dia: Faça um Programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada. Considere que a cobertura de tinta é de 1 litro para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custa R$ 80,00 ou em galões de 3,6 litros, que custa R$ 25,00.

// //     ◦ Informe ao usuário as quantidades de tinta a serem compradas e os respectivos preços em 3 situações:
// //     ◦ comprar apenas latas de 18 litros;
// //     ◦ comprar apenas galões de 3,6 litros;
// //     ◦ misturar latas e galões, de forma que o preço seja o menor. Acrescente 10% de folga e sempre arredonde os valores para cima, isto é, considere latas cheias.


const entrada = require("prompt-sync")({ sigint: true });

const calcularOpcaoCompra = (rendimentoMaximo, latasEGaloes) => ({
  apenasLatas: {
    quantidade: Math.ceil(rendimentoMaximo / latasEGaloes["18 litros"]),
    preco: Math.ceil(rendimentoMaximo / latasEGaloes["18 litros"]) * latasEGaloes["18 litros"]
  },
  apenasGaloes: {
    quantidade: Math.ceil(rendimentoMaximo / latasEGaloes["3.6 litros"]),
    preco: Math.ceil(rendimentoMaximo / latasEGaloes["3.6 litros"]) * latasEGaloes["3.6 litros"]
  },
  mistura: {
    latas: Math.floor(rendimentoMaximo / latasEGaloes["18 litros"]),
    galoes: Math.ceil((rendimentoMaximo % latasEGaloes["18 litros"]) / latasEGaloes["3.6 litros"]),
    preco:
      Math.floor(rendimentoMaximo / latasEGaloes["18 litros"]) * latasEGaloes["18 litros"] +
      Math.ceil((rendimentoMaximo % latasEGaloes["18 litros"]) / latasEGaloes["3.6 litros"]) * latasEGaloes["3.6 litros"]
  }
});

const comprarApenasONecessario = (tamanhoEmMetrosQuadrados) => {
  const rendimentoMaximo = tamanhoEmMetrosQuadrados / 6 * 1.1;
  const latasEGaloes = { "3.6 litros": 25.00, "18 litros": 80.00 };

  return { tamanhoEmMetrosQuadrados, rendimentoMaximo, latasEGaloes };
};

const informarAoUsuario = ({ tamanhoEmMetrosQuadrados, rendimentoMaximo, latasEGaloes }) => {
  if (tamanhoEmMetrosQuadrados <= 0 || isNaN(tamanhoEmMetrosQuadrados)) {
    console.log("Informe um valor válido.");
    return;
  }

  const opcoesDeCompra = calcularOpcaoCompra(rendimentoMaximo, latasEGaloes);

  console.log(`Apenas latas de 18L: ${opcoesDeCompra.apenasLatas.quantidade} latas → Total: R$${opcoesDeCompra.apenasLatas.preco.toFixed(2)}`);
  console.log(`Apenas galões de 3.6L: ${opcoesDeCompra.apenasGaloes.quantidade} galões → Total: R$${opcoesDeCompra.apenasGaloes.preco.toFixed(2)}`);
  console.log(`Mistura de latas e galões: ${opcoesDeCompra.mistura.latas} latas + ${opcoesDeCompra.mistura.galoes} galões → Total: R$${opcoesDeCompra.mistura.preco.toFixed(2)}`);
};

const tamanhoEmMetrosQuadrados = parseFloat(entrada("Informe o tamanho da área a ser pintada em m²: "));
const resultado = comprarApenasONecessario(tamanhoEmMetrosQuadrados);
informarAoUsuario(resultado);