import axios from 'axios'


const estadoNovo = novo =>{
    return axios
    .post('/estados/novo', {
        nome: novo.nome,
        sigla: novo.sigla
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const estadoGet = estadoLista =>{
    return axios
    .get('/estados')
    .then(res =>{
       return res.data
    
    })
}

export { estadoNovo, estadoGet }
