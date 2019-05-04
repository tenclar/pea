const express = require('express')
const usuarios = express.Router()

const cors = require('cors')
const jwt = require('jsonwebtoken')

const bcryptjs = require('bcryptjs')

const Usuario = require('../models/Usuario')
usuarios.use(cors())

process.env.SECRET_KEY = 'secret'

usuarios.post('/cadastro', (req, res) => {
   
    const today = new Date()
   
    const usuarioData ={
        nome: req.body.nome,
        email: req.body.email,
        password: req.body.password,
        created: today
    }
    
    Usuario.findOne({
        where : {
            email: req.body.email
        }
    })
    .then(usuario => {
        if(!usuario){
            bcryptjs.hash(req.body.password, 10, (err,hash) => {
                usuarioData.password = hash;
                Usuario.create(usuarioData)
                .then (usuario => {
                    res.json({status: usuario.email + '  cadastrado !'})
                })
                .catch(err => {
                    res.send('error: '+ err)
                })
            })        
        }else{
            res.json({error: "Usuário já Existe"})            
        }
    })
    .catch( err => {
        res.send('error: ' + err)
    })
})
 
usuarios.post('/login', (req, res) => {
    Usuario.findOne({
        where: {
            email: req.body.email
        }
    }).then(usuario =>{
        if(usuario) {
            if(bcryptjs.compareSync(req.body.password, usuario.password)){          
                let token = jwt.sign(usuario.dataValues, process.env.SECRET_KEY,{
                    expiresIn:1440                
                })
                res.send(token)
            }else{
                res.status(400).json({error: 'Usuário ou senha inválida'})
            }
        }else{
            res.status(400).json({error: 'Usuário não existe!'})
        }
    })
})

module.exports = usuarios
