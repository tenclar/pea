import axios from 'axios'


const orgaoNovo = novo =>{
    return axios
    .post('/orgaos/novo', {
        nome: novo.nome,
        descricao: novo.descricao
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const orgaoGet = lista =>{
    return axios
    .get('/orgaos')
    .then(res =>{
       return res.data
    
    })
}

export { orgaoNovo, orgaoGet }
