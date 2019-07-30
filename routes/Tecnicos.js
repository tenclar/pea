const express = require('express')
const router = express.Router()

const cors = require('cors')


const Tecnico = require('../models/Tecnico')
router.use(cors())

process.env.SECRET_KEY = 'secret'



router.get('/', async(req, res) => {
    const e = await Tecnico.findAll({  
       
        limit: 1000 
    })
    
    res.send(e)
}) 


const Op = Sequelize.Op;
router.get('/:argumento', async(req, res) => {
   
    const e = await Tecnico.findAll({
       
        where: { nome: { [Op.like]: '%'+req.params.argumento+'%' } }
        })

    res.send(e)
})

router.post('/novo', (req, res) => {
   
    
   
    const tecnicoData ={
        nome: req.body.nome,
        email: req.body.email,
        celular: req.body.celular,
        enderecoId:req.body.enderecoId,
        setorId: req.body.setorId,
        cargoId: req.body.cargoId
    }
    
    Tecnico.findOne({
        where : {
            nome: req.body.nome
        }
    })
    .then(tecnico => {
        if(!tecnico){
            
                Tecnico.create(tecnicoData)
                .then (tecnico => {
                    //console.log('cadastro ' + tecnico.nome + ' efetuado' )
                    res.json({status: tecnico.nome + '  cadastrado !'})
                })
                .catch(err => {
                    res.send('error: '+ err)
                })
                
        }else{
            res.json({error: " já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 



module.exports = router
