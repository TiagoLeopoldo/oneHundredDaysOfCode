// 17º Dia: Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).

const entrada = require("prompt-sync")({sigint: true});

const calcularTempoDeDownload = (tamanhoDoArquivo, velocidadeDoLink) => {
  if (tamanhoDoArquivo <= 0 || isNaN(tamanhoDoArquivo)) {
    console.log("ERRO: A informação concedida sobre o tamanho do arquivo não é válida. Tente novamente.");
    return
  } else if (velocidadeDoLink <= 0 || isNaN(velocidadeDoLink)) {
    console.log("ERRO: A informação concedida sobre a velocidade da internet não é válida. Tente novamente.");
    return
  };

  const mbpsParaMbpm = velocidadeDoLink * 7.5;
  const tempoDeDownload = tamanhoDoArquivo / mbpsParaMbpm;

  return tempoDeDownload
};

const informar = (tempoDeDownload) => {
  console.log(`O download vai demorar ${tempoDeDownload.toFixed(0)} minutos para estar completo.`);
};

const executarPrograma = () => {
const tamanhoDoArquivo = parseFloat(entrada("Informe o tamanho do arquivo em MB para download: "));
const velocidadeDoLink = parseFloat(entrada("Informe a velocidade de internet do link em Mbps: "));

const informarTempo = calcularTempoDeDownload(tamanhoDoArquivo, velocidadeDoLink);
informar(informarTempo);
};

executarPrograma();