import axios from 'axios'


const permissoesNovo = novo =>{
    return axios
    .post('/permissoes/novo', {
        nome: novo.nome,
        descricao: novo.descricao
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const permissoesGet = lista =>{
    return axios
    .get('/permissoes')
    .then(res =>{
       return res.data
    
    })
}

export { permissoesNovo, permissoesGet }
