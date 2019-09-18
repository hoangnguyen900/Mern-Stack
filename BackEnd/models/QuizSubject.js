const Sequelize = require("sequelize");
const db = require("../database");

const QuizSubject = db.define("quizsubject", {
  idSubject: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  subjectName: {
    type: "VARCHAR(50)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  subjectIcon: {
    type: "LONGBLOB",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});
module.exports = QuizSubject;
