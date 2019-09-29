const Sequelize = require("sequelize");
const db = require("../database");

const Subject = db.define("subject", {
  id: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  title: {
    type: "VARCHAR(50)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  icon: {
    type: "LONGBLOB",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});
module.exports = Subject;
