const express = require('express')
const router = express.Router()

const cors = require('cors')

const AreasTematicas = require('../models/AreasTematicas')
router.use(cors())



router.get('/', async(req, res) => {
    const e = await AreasTematicas.findAll()
    res.send(e)
})

router.post('/novo', (req, res) => {
   
    const today = new Date()
   
    const eData ={
        nome: req.body.nome,
        descricao: req.body.descricao
    }
    
    AreasTematicas.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(a => {
        if(!a){
               AreasTematicas.create(eData)
                .then (a => {
                    res.json({status: a.nome + '  cadastrado !'})
                })
                .catch(err => {
                    res.send('error: '+ err)
                })
           
             // })

        }else{
            res.json({error: "AreasTematicas já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
