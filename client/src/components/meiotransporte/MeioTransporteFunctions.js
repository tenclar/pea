import axios from 'axios'


const meiotransporteNovo = novo =>{
    return axios
    .post('/meiotransportes/novo', {
        nome: novo.nome,
        descricao: novo.descricao
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const meiotransporteGet = lista =>{
    return axios
    .get('/meiotransportes')
    .then(res =>{
       return res.data
    
    })
}

export { meiotransporteNovo, meiotransporteGet }
