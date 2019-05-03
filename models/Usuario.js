const Sequelize = require("sequelize")
const db = require("../database/db")

const usuario = db.sequelize.define('usuario',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncremet: true
        },
        
        nome_completo: {
            type:Sequelize.STRING
        },
        email: {
            type:Sequelize.STRING
        },
        password: {
            type:Sequelize.STRING
        },
        numerocelular: {
            type:Sequelize.INTEGER
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps:false,
        modelName:'usuario'
    }
)

module.exports = usuario