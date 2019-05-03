const Sequelize = require("sequelize")
const sequelize = new Sequelize("pea", "root", "root", {
  host: 'localhost',
  dialect: 'mysql' ,
  //operatorsAliases: false,

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle: 10000

    }
})
const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
