const express = require('express')
const router = express.Router()
const Sequelize = require("sequelize")
const cors = require('cors')
const AreasTematicas = require('../models/AreasTematicas')
const Temas = require('../models/Temas')
router.use(cors())

//AreasTematicas.hasMany(AreasTematicas)
Temas.belongsTo(AreasTematicas)

router.get('/', async(req, res) => {
    const e = await Temas.findAll({  
        include:[
            {model:AreasTematicas}
        ], 
        limit: 1000 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await Temas.findAll({
        include:[
            {model:AreasTematicas}
        ],
        where: { nome: { [Op.like]: '%'+req.params.argumento+'%' } }
        })

    res.send(e)
})

router.post('/novo', (req, res) => {
   
  //  const today = new Date()
   
    const dados ={
        nome: req.body.nome,
        descricao: req.body.descricao,
        areastematicaId: req.body.areastematicaId
    }
    
    Temas.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(t => {
        if(!t){
                Temas.create(dados)
                .then (t => {
                    res.json({status: t.nome + '  cadastrado !'})
                })
                .catch(err => {
                    res.send('error: '+ err)
                })
           
            

        }else{
            res.json({error: "Temas já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 

module.exports = router
