import axios from 'axios'


const temaNovo = novo =>{
    return axios

    .post('/temas/novo', {
        nome:novo.nome,
        descricao:novo.descricao,
        areastematicaId:novo.areastematicaId        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const temaGet = arg =>{
    
    return axios
    .get('/temas/'+arg)
    .then(res => {
       return res.data
    })
}

export { temaNovo, temaGet }
