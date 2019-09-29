const Sequelize = require("sequelize");
const db = require("../database");

const GameTable_Question = db.define("gametable_question", {
  table_id: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  question_id: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  }
});
module.exports = GameTable_Question;
