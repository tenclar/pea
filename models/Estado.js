const Sequelize = require("sequelize")
const db = require("../database/db")

const estado = db.sequelize.define('estados',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncremet: true
        },
        
        nome: {
            type:Sequelize.STRING
        },
        
        sigla: {
            type:Sequelize.STRING
        }
               
    }
   
)

module.exports = estado