import axios from 'axios'

export const estadoNovo = novo =>{
    return axios
    .post('estados/novo', {
        nome: novo.nome,
        email: novo.email,
        password: novo.password
    })
    .then(res => {
        console.log(" Registrado ")
    })
}
