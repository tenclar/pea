import axios from 'axios'


const modalidadeNovo = novo =>{
    return axios
    .post('/modalidades/novo', {
        nome: novo.nome,
        descricao: novo.descricao
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const modalidadeGet = lista =>{
    return axios
    .get('/modalidades')
    .then(res =>{
       return res.data
    
    })
}

export { modalidadeNovo, modalidadeGet }
