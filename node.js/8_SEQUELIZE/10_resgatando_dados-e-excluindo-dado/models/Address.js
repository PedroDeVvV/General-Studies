const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const Address = db.define("Address", {
  //definindo a entidade
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Address); //cardianialidade - um user tem vários endereços, mas um endereço pertence a um usuário
Address.belongsTo(User); //um endereço pertence a um usuário - Foreign key

module.exports = Address;
