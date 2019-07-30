const Sequelize = require("sequelize")
const db = require("../databases/db")

const tecnicos = db.sequelize.define('tecnicos',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        nome: {
            type:Sequelize.STRING
        },
        celular: {
            type:Sequelize.STRING
        },
       
        email: {
            type:Sequelize.STRING
        },
       
        enderecoId:{
            type:Sequelize.INTEGER
        },
        setorId:{
            type:Sequelize.INTEGER
        },
        cargoId:{
            type:Sequelize.INTEGER
        }
        
       
    },
    {
        
        modelName:'tecnicos'
    }
)

module.exports = tecnicos