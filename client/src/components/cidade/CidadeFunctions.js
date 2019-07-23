import axios from 'axios'


const cidadeNovo = novo =>{
    return axios

    .post('/cidades/novo', {

        estado:novo.estado,
        usuario:novo.usuario,
        regional:novo.regional,
        nome: novo.nome,
        cep: novo.cep
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const cidadeGet = arg =>{
    
    return axios
    .get('/cidades/'+arg)
    .then(res => {
       return res.data
    })
}

const cidadeIdGet = id =>{
    
    return axios
    .get('/cidades/estado/'+id)
    .then(res => {
       return res.data
    })
}

export { cidadeNovo, cidadeGet, cidadeIdGet }
