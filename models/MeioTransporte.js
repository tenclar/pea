const Sequelize = require("sequelize")
const db = require("../databases/db")

const meiotransportes = db.sequelize.define('meiotransportes',
    
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


module.exports = meiotransportes