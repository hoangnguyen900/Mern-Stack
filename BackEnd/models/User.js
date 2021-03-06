const Sequelize = require("sequelize");
const db = require("../database");

const User = db.define("user", {
  id: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true,
    foreignKey: [Object]
  },
  first_name: {
    type: "VARCHAR(50)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  last_name: {
    type: "VARCHAR(50)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  grades: {
    type: "CHAR(10)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  subject_id: {
    type: "INT(11)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false,
    foreignKey: [Object]
  }
});
module.exports = User;
