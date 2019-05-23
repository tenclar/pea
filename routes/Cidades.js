const express = require('express')
const router = express.Router()

const cors = require('cors')

const Cidade = require('../models/Cidade')
router.use(cors())



router.get('/', async(req, res) => {
    const e = await Cidade.findAll()
    res.send(e)
})

router.post('/novo', (req, res) => {
   
  //  const today = new Date()
   
    const cidadeData ={
        nome: req.body.nome,
        cep: req.body.cep,
        estado_id: req.body.estado,
        usuario_id: req.body.usuario,
        regionalestadual_id: req.body.regionalestadual,

    }
    
    Estado.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(cidade => {
        if(!cidade){
          
                

                Cidade.create(cidadeData)
                .then (cidade => {
                    res.json({status: cidade.nome + '  cadastrado !'})
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
