const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const Estado = require('../models/Estado')
const Cidade = require('../models/Cidade')
const Bairro = require('../models/Bairro')
const Endereco = require('../models/Endereco')
router.use(cors())

Estado.hasMany(Cidade)
Cidade.belongsTo(Estado)
Bairro.belongsTo(Cidade)
Endereco.belongsTo(Bairro)


router.get('/', async(req, res) => {
    const e = await Endereco.findAll({  
        include:[
            {
                model:Bairro,
                include:[{
                            model:Cidade,
                            inclide :[{model:Estado}]
                        }]
            }

        ], 
        limit: 30 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await Endereco.findAll({
        include:[
            {
                model:Bairro,
                include:[{
                            model:Cidade,
                            inclide :[{model:Estado}]
                        }]
            }

        ], 
        where: { nome: { [Op.like]: '%'+req.params.argumento+'%' } }
        })

    res.send(e)
})

router.post('/novo', (req, res) => {
   
  //  const today = new Date()
   
    const edata ={
        logradouro: req.body.logradouro,
        cep: req.body.cep,
        bairroId: req.body.bairroId
        
        

    }
    
    Endereco.findOne({
        where : {
            nome: req.body.logradouro
        }
    })
    .then(endereco => {
        if(!endereco){
            Endereco.create(edata)
                .then (endereco => {
                    res.json({status: endereco.logradouro + '  cadastrado !'})
                })
                .catch(err => {
                    res.send('error: '+ err)
                })
           
            

        }else{
            res.json({error: endereco.logradouro +" já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
