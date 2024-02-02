const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("estudos", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com sucesso com o sequelize");
} catch (err) {
  console.log(`Não possível conectar: ${err}`);
}

module.exports = sequelize;
