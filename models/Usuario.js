const Sequelize = require("sequelize")
const db = require("../databases/db")

const usuario = db.sequelize.define('usuario',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncremet: true
        },
        
        nome: {
            type:Sequelize.STRING
        },
        email: {
            type:Sequelize.STRING
        },
        password: {
            type:Sequelize.STRING
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