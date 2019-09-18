const Sequelize = require("sequelize");
const db = require("../database");

const GameTableGameQuestion = db.define("gametable_gamequestion", {
  idGameTable: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  idGameQuestion: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  }
});
module.exports = GameTableGameQuestion;
