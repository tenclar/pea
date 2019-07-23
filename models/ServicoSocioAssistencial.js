const Sequelize = require("sequelize")
const db = require("../databases/db")

const servicosocioassistenciais = db.sequelize.define('servicosocioassistenciais',
    
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
        modelName: 'servicosocioassistenciais'
     }
   
)

module.exports = servicosocioassistenciais