const x = 10;

try {
  x = 105;
} catch (err) {
  console.log(`Erro: ${err} constantes não podem receber novos valores`);
}
