const inquirer = require("inquirer");
const chalk = require("chalk");

try {
  inquirer
    .prompt([
      {
        name: "nome",
        message: "Qual é o seu nome ?",
      },
      {
        name: "idade",
        message: "Qual a sua idade ?",
      },
    ])
    .then((res) => {
      if (!res.nome || res.idade) {
        throw new Error("Informações inválidas");
      }

      console.log(chalk.green.bold(res.nome));
      console.log(chalk.blue.bold(res.idade));
    })
    .catch((err) => {
      console.log(`Erro: ${err}`);
    });
} catch (err) {
  console.log(chalk.red(`Não foi possivel executar o programa ${err}`));
}
