import axios from 'axios'


const enderecoNovo = novo =>{
    return axios

    .post('/enderecos/novo', {

        bairroId:novo.bairroId,        
        cep:novo.cep,
        logradouro: novo.logradouro
        
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const enderecoGet = arg =>{
    
    return axios
    .get('/enderecos/'+arg)
    .then(res => {
       return res.data
    })
}

export { enderecoNovo, enderecoGet }
