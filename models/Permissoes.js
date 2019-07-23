const Sequelize = require("sequelize")
const db = require("../databases/db")

const permissoes = db.sequelize.define('permissoes',
    
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
               
    },
    {
        underscored: false,
        Sequelize,
        modelName: 'permissoes'
     }
   
)

module.exports = permissoes