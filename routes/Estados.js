const express = require('express')
const estados = express.Router()

const cors = require('cors')
const jwt = require('jsonwebtoken')

const bcryptjs = require('bcryptjs')

const Estado = require('../models/Estado')
estados.use(cors())



estados.post('/novo', (req, res) => {
   
    const today = new Date()
   
    const usuarioData ={
        nome: req.body.nome,
        sigla: req.body.sigla,        
        created: today
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

                Usuario.create(usuarioData)
                .then (usuario => {
                    res.json({status: usuario.email + '  cadastrado !'})
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
 


module.exports = estados
