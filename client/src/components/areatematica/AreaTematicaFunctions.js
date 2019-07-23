import axios from 'axios'


const areaTematicaNovo = novo =>{
    return axios
    .post('/areastematicas/novo', {
        nome: novo.nome,
        sigla: novo.descricao
        
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

const areaTematicaGet = lista =>{
    return axios
    .get('/areastematicas')
    .then(res =>{
       return res.data
    
    })
}

export { areaTematicaNovo, areaTematicaGet }
