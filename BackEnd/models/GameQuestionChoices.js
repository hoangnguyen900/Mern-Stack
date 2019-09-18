const Sequelize = require("sequelize");
const db = require("../database");

const GameQuestionChoices = db.define("gamequestionchoices", {
  idGameChoice: {
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
  },
  gameChoice: {
    type: "VARCHAR(100)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  isRightChoice: {
    type: "TINYINT(1)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});
module.exports = GameQuestionChoices;
