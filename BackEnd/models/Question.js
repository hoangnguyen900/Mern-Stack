const Sequelize = require("sequelize");
const db = require("../database");

const Question = db.define("question", {
  id: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  question: {
    type: "VARCHAR(100)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});

module.exports = Question;
