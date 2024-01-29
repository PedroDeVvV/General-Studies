const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual a sua linguagem preferida ?", (language) => {
  if (language == "JavaScript") {
    console.log("kkkkk");
    return;
  }
  console.log(`A minha linguagem favorita é ${language}`);

  readline.close(); 
});
