const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define("user", {
  idUser: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  userFirstName: {
    type: "VARCHAR(50)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  userLastName: {
    type: "VARCHAR(50)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  userGrades: {
    type: "CHAR(10)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  idSubject: {
    type: "INT(11)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    foreignKey: [Object]
  }
});
module.exports = User;
