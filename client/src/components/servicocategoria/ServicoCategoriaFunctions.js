import axios from 'axios'


const servicoCategoriaNovo = novo =>{
    return axios
    .post('/servicoscategorias/novo', {
        nome: novo.nome,
        descricao: novo.descricao
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const servicoCategoriaGet = lista =>{
    return axios
    .get('/servicoscategorias')
    .then(res =>{
       return res.data
    
    })
}

export { servicoCategoriaNovo, servicoCategoriaGet }
