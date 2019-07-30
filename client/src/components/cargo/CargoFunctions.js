import axios from 'axios'


const cargoNovo = novo =>{
    return axios
    .post('/cargos/novo', {
        nome: novo.nome,
        descricao: novo.descricao
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const cargoGet = cargoLista =>{
    return axios
    .get('/cargos')
    .then(res =>{
       return res.data
    
    })
}

export { cargoNovo, cargoGet }
