// 20º Dia: Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.

const entrada = require("prompt-sync")({ sigint: true });

const verificarLetraEsperada = (letra) => {
  let letraEsperada;

  do {
    letraEsperada = entrada(letra).toUpperCase();
    if (letraEsperada !== "F" && letraEsperada !== "M") {
      console.log("Sexo inválido. Tente novamente.");
    }
  } while (letraEsperada !== "F" && letraEsperada !== "M");
  return letraEsperada;
};

const executarPrograma = () => {
  const letraInformada = verificarLetraEsperada(
    "Informe M para masculino ou F para feminino: "
  );

  if (letraInformada === "F") {
    console.log(`Você informou F - Feminino.`);
  } else {
    console.log(`Você informou M - Masculino.`);
  }
};

executarPrograma();