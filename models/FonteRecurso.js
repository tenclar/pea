const Sequelize = require("sequelize")
const db = require("../databases/db")

const fonterecursos = db.sequelize.define('fonterecursos',
    
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
        modelName: 'fonterecursos'
     }
   
)

module.exports = fonterecursos