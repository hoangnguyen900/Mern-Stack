const Sequelize = require("sequelize");
const db = require("../database");

const QuestionTable_Question = db.define("table_question", {
  question_table_id: {
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
module.exports = QuestionTable_Question;
