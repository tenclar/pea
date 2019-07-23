const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const Modalidade = require('../models/Modalidade')
router.use(cors())




router.get('/', async(req, res) => {
    const e = await Modalidade.findAll({  
        limit: 1000 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await Modalidade.findAll({
       
        where: { nome: { [Op.like]: '%'+req.params.argumento+'%' } }
        })

    res.send(e)
})

router.post('/novo', (req, res) => {
   
  //  const today = new Date()
   
    const entity ={
        nome: req.body.nome,
        descricao:req.body.descricao

    }
    
    Modalidade.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(modalidade => {
        if(!modalidade){
            Modalidade.create(entity)
            .then (modalidade => {
                res.json({status: modalidade.nome + '  cadastrado !'})
            })
            .catch(err => {
                res.send('error: '+ err)
            })
    
        }else{
            res.json({error: " já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
