let string = "Paralelepipedo";

function contaVogais(string) {
  let vogais = "aeiouAEIOU";
  let stringConv = string.toLowerCase();

  let caracteresString = stringConv.length;
  let vogaisEncontradas = 0;
  for (let i = 0; i < caracteresString; i++) {
    if (vogais.includes(stringConv[i])) {
      vogaisEncontradas += 1;
    }
  }
  return console.log(
    `A frase "${string}" possui ${vogaisEncontradas} letras que são vogais no total.`
  );
}

contaVogais(string);
