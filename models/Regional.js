const Sequelize = require("sequelize")
const db = require("../databases/db")

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