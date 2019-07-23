import React, {Component} from 'react'
import {areaTematicaNovo} from './AreaTematicaFunctions'

class AreasTematicasForm extends Component {
    constructor() {
        super()
        this.state = {
            nome:'',
            descricao:''            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value.toUpperCase() })
    }

    onSubmit(e){
        e.preventDefault()
 
        const entity = {
            nome:this.state.nome,
            descricao:this.state.descricao           

        }
        areaTematicaNovo(entity).then(res => {           
                this.props.history.push('/areastematicas')
        })
    }

    render(){
        return(
          
                    <div className="wrapper">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Áreas Temáticas
                                <small>Cadastro</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Painel Controle</a></li>
                                <li><a href="/estados">Áreas Temáticas</a></li>
                                <li className="active">Novo</li>
                                </ol>
                            </section>

                                { /*Main content */}
                            <section className="content container"  >

                            <div className="row">
                            <div className="col-xs-1"> </div> 
                            <div className="col-xs-8">                


                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Informe os dados da Área Temática</h3>
                                    </div>
                                
                            
                                    <form noValidate onSubmit={this.onSubmit} >
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label htmlFor="nome">Nome</label>
                                                <input type="text"
                                                className="form-control input-lg"                      
                                                placeholder="Escreva Nome do Area Tematica"
                                                id="nome" 
                                                name="nome"
                                                value={this.state.nome}
                                                onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="descricao">Descrição</label>
                                                <input type="text" 
                                                    className="form-control input-lg"                     
                                                    placeholder="Informe uma descrição"
                                                    id="descricao"
                                                    name="descricao"
                                                    value={this.state.descricao}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                          
                           
                                        </div>
                                    

                                        <div className="box-footer">
                                            <button type="submit" className="btn btn-primary">Salvar</button>
                                            <a href="/areastematicas"  className="btn btn-danger">Cancelar</a>
                                        </div>
                                    </form>
                                </div>

                            {  
                            /* <!--------------------------
                                | Your Page Content Here |
                                --------------------------> */
                            }
                                </div>
                                </div>
                            </section>
                        {/* <!-- /.content --> */}
                        </div>
                        {/*  <!-- /.content-wrapper --> */}
                    </div>
             
            
        )
    }
}

export default AreasTematicasForm