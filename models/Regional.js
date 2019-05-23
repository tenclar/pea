const Sequelize = require("sequelize")
const db = require("../database/db")

const regionais = db.sequelize.define('regionalestaduais',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncremet: true
        },
        
        nome: {
            type:Sequelize.STRING
        },
        descricao: {
            type:Sequelize.STRING
        }
        
     
               
    }
   
)

module.exports = regionais