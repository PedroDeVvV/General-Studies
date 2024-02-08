// const mysql = require('mysql2')
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("bancoMVC", "root", "", {
  //o terceiro parametro é a senha
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log(`Connection successfuly`);
} catch (err) {
  console.log(`Error on database connection: ${err}`);
}

module.exports = sequelize;
