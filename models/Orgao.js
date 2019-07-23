const Sequelize = require("sequelize")
const db = require("../databases/db")

const orgao = db.sequelize.define('orgaos',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nome: {
            type:Sequelize.STRING
        },

        descricao: {
            type:Sequelize.STRING
        }
       
               
    }
)


module.exports = orgao