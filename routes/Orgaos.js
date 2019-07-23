const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const Orgao = require('../models/Orgao')
router.use(cors())




router.get('/', async(req, res) => {
    const e = await Orgao.findAll({  
        limit: 1000 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await Orgao.findAll({
       
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
    
    Orgao.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(orgao => {
        if(!orgao){
            Orgao.create(entity)
            .then (orgao => {
                res.json({status: orgao.nome + '  cadastrado !'})
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
