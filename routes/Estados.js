const express = require('express')
const router = express.Router()

const cors = require('cors')

const Estado = require('../models/Estado')
router.use(cors())



router.get('/', async(req, res) => {
    const e = await Estado.findAll()
    res.send(e)
})

router.post('/novo', (req, res) => {
   
    const today = new Date()
   
    const eData ={
        nome: req.body.nome,
        sigla: req.body.sigla
    }
    
    Estado.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(estado => {
        if(!estado){
            /* bcryptjs.hash(req.body.password, 10, (err,hash) => {
                usuarioData.password = hash; */
                

                Estado.create(eData)
                .then (estado => {
                    res.json({status: estado.nome + '  cadastrado !'})
                })
                .catch(err => {
                    res.send('error: '+ err)
                })
           
             // })

        }else{
            res.json({error: "Estado já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
