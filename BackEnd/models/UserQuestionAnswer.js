const Sequelize = require("sequelize");
const db = require("../database");

const UserQuestionAnswer = db.define("userquestionanswer", {
  idUser: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  idGameQuestion: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  idGameChoice: {
    type: "INT(11)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  isRight: {
    type: "TINYINT(1)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});
module.exports = UserQuestionAnswer;
