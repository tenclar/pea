const Sequelize = require("sequelize")
const db = require("../databases/db")

const modalidade = db.sequelize.define('modalidades',
    
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


module.exports = modalidade