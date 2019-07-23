const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const ServicoCategoria = require('../models/ServicoCategoria')
router.use(cors())




router.get('/', async(req, res) => {
    const e = await ServicoCategoria.findAll({  
        limit: 1000 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await ServicoCategoria.findAll({
       
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
    
    ServicoCategoria.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(servicocategoria => {
        if(!servicocategoria){
            ServicoCategoria.create(entity)
            .then (meiotransporte => {
                res.json({status: servicocategoria.nome + '  cadastrado !'})
            })
            .catch(err => {
                res.send('error: '+ err)
            })
    
        }else{
            res.json({error: servicocategoria.nome +" já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
