const Sequelize = require("sequelize");
const db = require("../database");

const GameQuestion = db.define("gamequestion", {
  idGameQuestion: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  gameQuestionName: {
    type: "VARCHAR(100)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});

module.exports = GameQuestionGameChoices;
