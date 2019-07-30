const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const Cargo = require('../models/Cargo')
router.use(cors())




router.get('/', async(req, res) => {
    const e = await Cargo.findAll({  
        limit: 1000 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await Cargo.findAll({
       
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
    
    Cargo.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(cargo => {
        if(!cargo){
            Cargo.create(entity)
            .then (cargo => {
                res.json({status: cargo.nome + '  cadastrado !'})
            })
            .catch(err => {
                res.send('error: '+ err)
            })
    
        }else{
            res.json({error: cargo.nome + " já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
