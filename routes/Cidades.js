const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const Estado = require('../models/Estado')
const Cidade = require('../models/Cidade')
router.use(cors())

//Estado.hasMany(Estado)
Cidade.belongsTo(Estado)

router.get('/', async(req, res) => {
    const e = await Cidade.findAll({  
        include:[
            {model:Estado}
        ], 
        limit: 1000 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await Cidade.findAll({
        include:[
            {model:Estado}
        ],
        where: { nome: { [Op.like]: '%'+req.params.argumento+'%' } }
        })

    res.send(e)
})


router.get('/estado/:id', async(req, res) => {
   
    const e = await Cidade.findAll({
        
        where: { estadoId: req.params.id }
        })

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
    
    Cidade.findOne({
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
