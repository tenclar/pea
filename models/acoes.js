const Sequelize = require("sequelize")
const db = require("../databases/db")

const acoes = db.sequelize.define('acoes',
    
    {
        id: {
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        uid: {
            type:Sequelize.STRING
        },

        titulo: {
            type:Sequelize.STRING
        },

        data_inicio: {
            type:Sequelize.DATE
        },
        data_fim: {
            type:Sequelize.DATE
        },

        local: {
            type:Sequelize.STRING
        },
        qtd_beneficiarios_indiretos_ind: {
            type:Sequelize.INTEGER
        },
        
        qtd_beneficiarios_indiretos_fam: {
            type:Sequelize.INTEGER
        },

        qtd_beneficiarios_diretos: {
            type:Sequelize.INTEGER
        },

        origem_acao_doc_data: {
            type:Sequelize.DATE
        },

        origem_acao_doc_num: {
            type:Sequelize.STRING
        },
        origem_acao_doc_emissor: {
            type:Sequelize.STRING
        },
       
        justificativatecnica: {
            type:Sequelize.STRING
        },
       
        acaoorigemId: {
            type:Sequelize.INTEGER
        },

        usuarioId: {
            type:Sequelize.INTEGER
        }      
        
        
               
    }
)


module.exports = bairros