import axios from 'axios'


const bairroNovo = novo =>{
    return axios

    .post('/bairros/novo', {

        cidadeId:novo.estadoId,
        usuarioId:novo.usuarioId,
        zona:novo.zona,
        nome: novo.nome
        
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const bairroGet = arg =>{
    
    return axios
    .get('/bairros/'+arg)
    .then(res => {
       return res.data
    })
}

export { bairroNovo, bairroGet }
