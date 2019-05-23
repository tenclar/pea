const express = require('express')
const router = express.Router()

const cors = require('cors')

const Regional = require('../models/Regional')
router.use(cors())



router.get('/', async(req, res) => {
    const e = await Regional.findAll()
    res.send(e)
})

router.post('/novo', (req, res) => {
   
    const today = new Date()
   
    const eData ={
        nome: req.body.nome
        
    }
    
    Regional.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(regional => {
        if(!regional){
            /* bcryptjs.hash(req.body.password, 10, (err,hash) => {
                usuarioData.password = hash; */
                

                Regional.create(eData)
                .then (regional => {
                    res.json({status: regional.nome + '  cadastrado !'})
                })
                .catch(err => {
                    res.send('error: '+ err)
                })
           
             // })

        }else{
            res.json({error: "Regional já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
