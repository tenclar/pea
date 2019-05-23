import axios from 'axios'


const regionalNovo = novo =>{
    return axios
    .post('/regionais/novo', {
        nome: novo.nome,
        descricao: novo.descricao
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const regionalGet = estadoLista =>{
    return axios
    .get('/regionais')
    .then(res =>{
       return res.data
    
    })
}

export { regionalNovo, regionalGet }
