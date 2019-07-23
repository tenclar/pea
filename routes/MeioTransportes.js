const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const MeioTransporte = require('../models/MeioTransporte')
router.use(cors())




router.get('/', async(req, res) => {
    const e = await MeioTransporte.findAll({  
        limit: 1000 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await MeioTransporte.findAll({
       
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
    
    MeioTransporte.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(meiotransporte => {
        if(!meiotransporte){
            MeioTransporte.create(entity)
            .then (meiotransporte => {
                res.json({status: meiotransporte.nome + '  cadastrado !'})
            })
            .catch(err => {
                res.send('error: '+ err)
            })
    
        }else{
            res.json({error: "Cidade já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
