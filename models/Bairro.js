const Sequelize = require("sequelize")
const db = require("../databases/db")

const bairros = db.sequelize.define('bairros',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nome: {
            type:Sequelize.STRING
        },
       
        cidadeId: {
            type:Sequelize.INTEGER
        },
        usuarioId: {
            type:Sequelize.INTEGER
        },      
        
        zona: {
            type:Sequelize.STRING
        }
               
    }
)


module.exports = bairros