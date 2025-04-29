// 14º Dia: Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:

//       1. salário bruto.
//       2. quanto pagou ao INSS.
//       3. quanto pagou ao sindicato.
//       4. o salário líquido.
//       5. calcule os descontos e o salário líquido, conforme a tabela abaixo:


//             + Salário Bruto : R$
//             - IR (11%) : R$
//             - INSS (8%) : R$
//             - Sindicato ( 5%) : R$
//             = Salário Liquido : R$

//             Obs.: Salário Bruto - Descontos = Salário Líquido.

const entrada = require("prompt-sync")({sigint: true});

const calcularSalarioReferido = (salarioBrutoMensal) => {
    const taxas = {IR: 0.11, INSS: 0.08, sindicato: 0.05}
  
  const descontos = {
    impostoIR: taxas.IR * salarioBrutoMensal,
    impostoINSS: taxas.INSS * salarioBrutoMensal,
    impostoSindicato: taxas.sindicato * salarioBrutoMensal
  }

  const salarioLiquidoMensal = salarioBrutoMensal - (descontos.impostoINSS + descontos.impostoIR + descontos.impostoSindicato);

  return {salarioBrutoMensal,salarioLiquidoMensal, ...descontos};
};

const exibirResultado = ({salarioBrutoMensal,salarioLiquidoMensal, impostoIR, impostoINSS, impostoSindicato}) => {
  console.log(`+ Salário bruto mensal: R$${salarioBrutoMensal.toFixed(2)}`)
  console.log(`- IR (11%): R$${impostoIR.toFixed(2)}`)
  console.log(`- INSS (8%): R$${impostoINSS.toFixed(2)}`)
  console.log(`- Sindicato (5%): R$${impostoSindicato.toFixed(2)}`)
  console.log(`= Salário líquido: R$${salarioLiquidoMensal.toFixed(2)}`)
}

const executarPrograma = () => {
  const ganhoPorHora = parseFloat(entrada("Informe o valor da remuneração por hora: "));
  const horasTrabalhadas = parseInt(entrada("Informe a quantidade de horas trabalhadas no mês: "));
  
  if (isNaN(ganhoPorHora) || isNaN(horasTrabalhadas) || ganhoPorHora <= 0 || horasTrabalhadas <= 0) {
    console.log("O valor informado é inválido, tente novamente.");
    
    return
  };

  const salarioBrutoMensal = ganhoPorHora * horasTrabalhadas;

  const resultado = calcularSalarioReferido(salarioBrutoMensal);
  exibirResultado(resultado);
};

executarPrograma();