import React, {Component} from 'react'
import {login} from './UsuarioFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email:'',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()

        const usuario = {
            email: this.state.email,
            password:this.state.password

        }
        login(usuario).then(res => {
            if(res) {
                this.props.history.push('/profile')
            }
        })
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit} >
                            <h1 className="h3 md-3 font-weight-normal">Acesso</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" 
                                className="form-control"
                                name="email" 
                                placeholder="Entre com E-mail" 
                                value={this.state.email}
                                onChange={this.onChange} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" 
                                className="form-control"
                                name="password" 
                                placeholder="Entre com password" 
                                value={this.state.password}
                                onChange={this.onChange} />
                            </div>
                            <button type="submit" 
                            className="btn btn-lg btn-primary btn-block">
                             Entrar
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login