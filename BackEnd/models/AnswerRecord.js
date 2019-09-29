const Sequelize = require("sequelize");
const db = require("../database");

const AnswerRecord = db.define("answer_record", {
  user_id: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
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
  },
  choice_id: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: false,
    foreignKey: [Object]
  }
});
module.exports = AnswerRecord;
