const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const Estado = require('../models/Estado')
const Cidade = require('../models/Cidade')
const Bairro = require('../models/Bairro')
router.use(cors())

Estado.hasMany(Cidade)
Cidade.belongsTo(Estado)
Bairro.belongsTo(Cidade)


router.get('/', async(req, res) => {
    const e = await Bairro.findAll({  
        include:[
            {
                model:Cidade,
                include:[{model:Estado}]
            }

        ], 
        limit: 30 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await Bairro.findAll({
        include:[
            {model:Cidade}
        ],
        where: { nome: { [Op.like]: '%'+req.params.argumento+'%' } }
        })

    res.send(e)
})

router.post('/novo', (req, res) => {
   
  //  const today = new Date()
   
    const data ={
        nome: req.body.nome,
        zona: req.body.zona,
        cidadeId: req.body.estadoId,
        usuarioId: req.body.usuario
        

    }
    
    Cidade.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(bairro => {
        if(!bairro){
                Bairro.create(data)
                .then (bairro => {
                    res.json({status: bairro.nome + '  cadastrado !'})
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
