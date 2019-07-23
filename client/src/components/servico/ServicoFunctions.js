import axios from 'axios'


const servicoNovo = novo =>{
    return axios

    .post('/servicos/novo', {

        estado:novo.estado,
        descricao:novo.descricao,
        servicocategoriaId:novo.servicocategoriaId
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const servicoGet = arg =>{
    
    return axios
    .get('/servicos/'+arg)
    .then(res => {
       return res.data
    })
}

const servicoIdGet = id =>{
    
    return axios
    .get('/servicos/categoria/'+id)
    .then(res => {
       return res.data
    })
}

export { servicoNovo, servicoGet, servicoIdGet }
