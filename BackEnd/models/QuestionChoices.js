const Sequelize = require("sequelize");
const db = require("../database");

const QuestionChoices = db.define("question_choices", {
  id: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    autoIncrement: true,
    primaryKey: true,
    foreignKey: [Object]
  },
  question_id: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  choice: {
    type: "VARCHAR(100)",
    allowNull: false,
    defaultValue: null,
    primaryKey: false
  },
  is_right_choice: {
    type: "TINYINT(1)",
    allowNull: false,
    defaultValue: null,
    primaryKey: false
  }
});
module.exports = QuestionChoices;
