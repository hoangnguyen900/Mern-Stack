const Sequelize = require("sequelize");
const db = require("../database");

const User_Question_Answer = db.define("user_question_answer", {
  user_id: {
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
  choice_id: {
    type: "INT(11)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    foreignKey: [Object]
  },
  is_right_choice: {
    type: "TINYINT(1)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});
module.exports = User_Question_Answer;
