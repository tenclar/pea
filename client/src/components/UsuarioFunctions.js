import axios from 'axios'

export const cadastro = newUsuario =>{
    return axios
    .post('usuarios/cadastro', {
        nome: newUsuario.nome,
        email: newUsuario.email,
        password: newUsuario.password
    })
    .then(res => {
        console.log(" Registrado ")
    })
}

export const login = usuario => {
    return axios
    .post('usuarios/login', {
        email: usuario.email,
        password: usuario.password
    })
    .then(res => {
        localStorage.setItem('usuariotoken', res.data)
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}