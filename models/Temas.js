const Sequelize = require("sequelize")
const db = require("../databases/db")

const temas = db.sequelize.define('temas',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncremet: true
        },
        areastematicaId: {
            type:Sequelize.INTEGER
        },
        
        nome: {
            type:Sequelize.STRING
        },
        
        descricao: {
            type:Sequelize.STRING
        }
               
    }
   
)

module.exports = temas