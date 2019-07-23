const Sequelize = require("sequelize")
const db = require("../databases/db")

const servicocategoria = db.sequelize.define('servicocategorias',
    
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


module.exports = servicocategoria