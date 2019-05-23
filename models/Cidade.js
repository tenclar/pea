const Sequelize = require("sequelize")
const db = require("../database/db")

const cidade = db.sequelize.define('cidades',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncremet: true
        },
        
        nome: {
            type:Sequelize.STRING
        },
        estado_id: {
            type:Sequelize.INTEGER
        },
        usuario_id: {
            type:Sequelize.INTEGER
        },
        regionalestadual_id: {
            type:Sequelize.INTEGER
        },
        
        cep: {
            type:Sequelize.STRING
        }
               
    }
   
)

module.exports = cidade