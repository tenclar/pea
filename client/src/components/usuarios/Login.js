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
            <div className="hold-transition login-page login-bloco" >

            <div className="login-box">
                    <div className="login-logo">
                        <a href="../../index2.html"><b>Painel E-</b>Ações</a>
                    </div>

                    {/* <!-- /.login-logo --> */}
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                
                    <form action="../../index2.html" method="post">
                        <div className="form-group has-feedback">
                        <input type="email" className="form-control" placeholder="Email" />
                        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                        <input type="password" className="form-control" placeholder="Password" />
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                
                            </div>
                            {/*   <!-- /.col --> */}
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                            {/* <!-- /.col --> */}
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                            <div className="form-group has-feedback"></div>
                            </div>
                        </div>
                    </form>
                
                    <div className="box box-danger text-center">
                        
                    </div>
                    {/* <!-- /.box box-danger --> */}
                
                    <a href="##">I forgot my password</a><br />
                    <a href="register.html" className="text-center">Register a new membership</a>
                
                </div>
                    {/* <!-- /.login-box-body --> */}
            </div>
            {/* <!-- /.login-box --> */}
            <div className="login-bloco"></div>
            </div>
        
        )
    }
}

export default Login