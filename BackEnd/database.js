<<<<<<< HEAD
const Sequelize = require('sequelize');
module.exports = new Sequelize('quizzz', 'root', 'htclc4', {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    define: {
        timestamps: false,
        freezeTableName:true
    }
  });

=======
const Sequelize = require("sequelize");
module.exports = new Sequelize("quizzz", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false,
    freezeTableName: true
  }
});
>>>>>>> fc2166439b4847d213884b4c626ba8d972b921c6
