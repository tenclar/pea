const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const ServicoCategorira = require('../models/ServicoCategoria')
const ServicoSocioAssistencial = require('../models/ServicoSocioAssistencial')
router.use(cors())


ServicoSocioAssistencial.belongsTo(ServicoCategorira)

router.get('/', async(req, res) => {
    const e = await ServicoSocioAssistencial.findAll({  
        include:[
            {model:ServicoCategoria}
        ], 
        limit: 1000 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await ServicoSocioAssistencial.findAll({
        include:[
            {model:ServicoCategoria}
        ],
        where: { nome: { [Op.like]: '%'+req.params.argumento+'%' } }
        })

    res.send(e)
})


router.get('/servicosocioassistenciais/:id', async(req, res) => {
   
    const e = await ServicoSocioAssistencial.findAll({
        
        where: { servicocategoriaId: req.params.id }
        })

    res.send(e)
})

router.post('/novo', (req, res) => {
   
  //  const today = new Date()
   
    const eData ={
        nome: req.body.nome,
        descricao: req.body.descricao,
        servicocategoriaId: req.body.servicocategoriaId
      
    }
    
    ServicoSocioAssistencial.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(ssa => {
        if(!ssa){
                Cidade.create(eData)
                .then (ssa => {
                    res.json({status: ssa.nome + '  cadastrado !'})
                })
                .catch(err => {
                    res.send('error: '+ err)
                })
           
            

        }else{
            res.json({error: ssa.nome +" já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
