const Sequelize = require("sequelize");
const db = require("../database");

const Question_Choices = db.define("question_choices", {
  id: {
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
  },
  choice: {
    type: "VARCHAR(100)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  is_right_choice: {
    type: "TINYINT(1)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});
module.exports = Question_Choices;
