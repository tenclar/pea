const express = require('express')
const router = express.Router()

const cors = require('cors')

const Permissoes = require('../models/Permissoes')
router.use(cors())



router.get('/', async(req, res) => {
    const e = await Permissoes.findAll()
    res.send(e)
})

router.post('/novo', (req, res) => {
   
    const eData ={
        nome: req.body.nome,
        descricao: req.body.descricao
    }
    
    Permissoes.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(entity => {
        if(!entity){
            Permissoes.create(eData)
                .then (entity => {
                    res.json({status: entity.nome + '  cadastrado !'})
                })
                .catch(err => {
                    res.send('error: '+ err)
                })
           
             // })

        }else{
            res.json( { error: entity.nome+" já Existe" } )            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
