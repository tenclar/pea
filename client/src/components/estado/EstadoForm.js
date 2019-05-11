import React, {Component} from 'react'
import {estadoNovo} from './EstadoFunctions'

class EstadoForm extends Component {
    constructor() {
        super()
        this.state = {
            nome:'',
            sigla:''            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
 
        const estado = {
            nome:this.state.nome,
            sigla:this.state.sigla           

        }
        estadoNovo(estado).then(res => {           
                this.props.history.push('/estados')
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
                                Estado
                                <small>Cadastro de Estado</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                                <li><a href="/estados">Estados</a></li>
                                <li className="active">Novo</li>
                                </ol>
                            </section>

                                { /*Main content */}
                            <section className="content container" >

                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Informe os dados do Estado</h3>
                                    </div>
                                
                            
                                    <form noValidate onSubmit={this.onSubmit} >
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label for="nome">Nome</label>
                                                <input type="text"
                                                className="form-control input-lg"                      
                                                placeholder="Escreva Nome do Estado"
                                                id="nome" 
                                                name="nome"
                                                value={this.state.nome}
                                                onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label for="sigla">Sigla</label>
                                                <input type="text" 
                                                    className="form-control input-lg"                     
                                                    placeholder="Escriva Sigla (UF)"
                                                    id="sigla"

                                                />
                                            </div>
                                        
                                        </div>
                                    

                                        <div className="box-footer">
                                            <button type="submit" className="btn btn-primary">Salvar</button>
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

export default EstadoForm