const Sequelize = require("sequelize")
const db = require("../databases/db")

const cidade = db.sequelize.define('cidades',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nome: {
            type:Sequelize.STRING
        },
        estadoId: {
            type:Sequelize.INTEGER
        },
        usuarioId: {
            type:Sequelize.INTEGER
        },
        regionalestadualId: {
            type:Sequelize.INTEGER
        },
        
        cep: {
            type:Sequelize.STRING
        }
               
    }
)


module.exports = cidade