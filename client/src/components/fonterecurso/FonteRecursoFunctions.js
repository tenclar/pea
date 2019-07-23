import axios from 'axios'


const recursoNovo = novo =>{
    return axios
    .post('/fonterecursos/novo', {
        nome: novo.nome,
        descricao: novo.descricao
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const recursoGet = lista =>{
    return axios
    .get('/fonterecursos')
    .then(res =>{
       return res.data
    
    })
}

export { recursoNovo, recursoGet }
