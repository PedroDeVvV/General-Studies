const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false, //NOT NULL
  },
  occupation: {
    type: DataTypes.STRING,
    required: true, //Não aceita null e string vázia
  },
  newsletter: {
    type: DataTypes.BOOLEAN
  },
});

module.exports = User
