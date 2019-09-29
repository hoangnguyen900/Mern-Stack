const Sequelize = require("sequelize");
const db = require("../database");

const Score = db.define("score", {
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
  mark: {
    type: "TINYINT(1)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});
module.exports = Score;
