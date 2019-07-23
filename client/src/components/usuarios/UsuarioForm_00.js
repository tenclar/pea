import React, {Component} from 'react'
import {usuarioNovo} from './UsuarioFunctions'

class UsuarioForm extends Component {
    constructor() {
        super()
        this.state = {
            nome:'',
            email:'',
            password:''            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }

    onSubmit(e){
        e.preventDefault()
 
        const usuario = {

            nome:this.state.nome,
            email:this.state.email,
            password: this.state.password           

        }
        usuarioNovo(usuario).then(res => {           
                this.props.history.push('/usuarios')
        })
    }

    render(){
        return(
            <div>
                <div className="hold-transition skin-blue sidebar-mini" >
                    <div className="wrapper">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Usuario
                                <small>Cadastro de Usuario</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                                <li><a href="/usuarios">Usuarios</a></li>
                                <li className="active">Novo</li>
                                </ol>
                            </section>

                                { /*Main content */}
                            <section className="content container" >

                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Informe os dados do Usuario</h3>
                                    </div>
                                
                            
                                    <form noValidate onSubmit={this.onSubmit} >
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label htmlFor="nome">Nome</label>
                                                <input type="text"
                                                className="form-control input-lg"                      
                                                placeholder="Escreva Nome do Usuario"
                                                id="nome" 
                                                name="nome"
                                                value={this.state.nome}
                                                onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">E-mail</label>
                                                <input type="text" 
                                                    className="form-control input-lg"                     
                                                    placeholder="Email Institucional"
                                                    id="email"
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" 
                                                className="form-control input-lg"
                                                name="password" 
                                                placeholder="Entre com password" 
                                                value={this.state.password}
                                                onChange={this.onChange} />
                                            </div>
                                        
                                        </div>
                                    

                                        <div className="box-footer">
                                            <button type="submit" className="btn btn-primary">Salvar</button>
                                            <a href="/usuarios"  className="btn btn-danger">Cancelar</a>
                                        </div>
                                    </form>
                                </div>

                            {  
                            /* <!--------------------------
                                | Your Page Content Here |
                                --------------------------> */
                            }
                                
                            </section>
                        {/* <!-- /.content --> */}
                        </div>
                        {/*  <!-- /.content-wrapper --> */}
                    </div>
                </div>
                           
            </div>
            
        )
    }
}

export default UsuarioForm