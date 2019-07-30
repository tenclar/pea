import axios from 'axios'


const setorNovo = novo =>{
    return axios
    .post('/setores/novo', {
        nome: novo.nome,
        descricao: novo.descricao
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const setorGet = setorLista =>{
    return axios
    .get('/setores')
    .then(res =>{
       return res.data
    
    })
}

export { setorNovo, setorGet }
