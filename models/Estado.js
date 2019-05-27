const Sequelize = require("sequelize")
const db = require("../databases/db")

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