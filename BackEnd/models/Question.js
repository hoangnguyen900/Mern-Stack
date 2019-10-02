const Sequelize = require("sequelize");
const db = require("../database");

const Question = db.define("question", {
  id: {
    type: "INT(11)",
    allowNull: false,
    autoIncrement: true,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  question: {
    type: "VARCHAR(100)",
    allowNull: false,
    defaultValue: null,
    primaryKey: false
  },
  time: {
    type: "DOUBLE",
    allowNull: false,
    defaultValue: 30,
    primaryKey: false
  }
});

module.exports = Question;
