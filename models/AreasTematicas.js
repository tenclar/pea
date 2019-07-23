const Sequelize = require("sequelize")
const db = require("../databases/db")

const areastematicas = db.sequelize.define('areastematicas',
    
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

module.exports = areastematicas