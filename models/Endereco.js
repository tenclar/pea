const Sequelize = require("sequelize")
const db = require("../databases/db")

const enderecos = db.sequelize.define('enderecos',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        logradouro: {
            type:Sequelize.STRING
        },
       
        bairroId: {
            type:Sequelize.INTEGER
        },
        cep: {
            type:Sequelize.STRING
        }
               
    }
)


module.exports = enderecos