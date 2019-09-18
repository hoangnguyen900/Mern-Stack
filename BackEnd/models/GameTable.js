const Sequelize = require("sequelize");
const db = require("../database");

const GameTable = db.define("gametable", {
  idGameTable: {
    type: "INT(11)",
    allowNull: false,
    defaultValue: null,
    primaryKey: true
  },
  gameCode: {
    type: "INT(6)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  gameTitle: {
    type: "VARCHAR(50)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  gameGradeBegin: {
    type: "INT(11)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  gameGradeEnd: {
    type: "INT(11)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  gameLevel: {
    type: "INT(11)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  gamePlayed: {
    type: "INT(11)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  idSubject: {
    type: "INT(11)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  gameImage: {
    type: "LONGBLOB",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  isPublic: {
    type: "TINYINT(1)",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  },
  gameTime: {
    type: "DOUBLE",
    allowNull: true,
    defaultValue: null,
    primaryKey: false
  }
});
module.exports = GameTable;
