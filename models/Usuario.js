const Sequelize = require("sequelize")
const db = require("../databases/db")

const usuario = db.sequelize.define('usuarios',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nome: {
            type:Sequelize.STRING
        },
        email: {
            type:Sequelize.STRING
        },
        password: {
            type:Sequelize.STRING
        }
        
       
    },
    {
        
        modelName:'usuarios'
    }
)

module.exports = usuario