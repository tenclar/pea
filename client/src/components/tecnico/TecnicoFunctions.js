import axios from 'axios'

 const tecnicoNovo = newTecnico =>{
    return axios
    .post('tecnicos/novo', {
        nome: newTecnico.nome,
        email: newTecnico.email,
        celular: newTecnico.celular,
        setorId:newTecnico.setorId,
        cargoId:newTecnico.cargoId


    })
    .then(res => {
        console.log(" Registrado "+res.data)
    })
}




const tecnicoGet = tecnicoLista =>{
    return axios
    .get('/tecnicos')
    .then(res =>{
       return res.data
    
    })
}

export { tecnicoNovo, tecnicoGet }