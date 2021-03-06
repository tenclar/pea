import React, {Component} from 'react'

import {permissoesGet} from './PermissoesFunctions'


class FonteRecursoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            permissoes:[]            
        }

       // this.onChange = this.onChange.bind(this)
        //this.onSubmit = this.onSubmit.bind(this)

    }
    
    /* onChange(e){
        this.setState({[e.target.name]: e.target.value})
    } */

    componentDidMount(){
        permissoesGet().then( permissoes => {
            
                this.setState({
                    permissoes: permissoes                     
                   })        
        })   
        
        
    }

    render(){
        const { permissoes } = this.state


        return(
            
            
                    <div >
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Permissões
                                <small>Cadastro </small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Painel Pricipal</a></li>
                                <li><a href="/permissoes">Permissões</a></li>
                                <li className="active">Lista</li>
                                </ol>
                            </section>

                                { /*Main content */}
                            <section className="content container-resposive" >

                                     
                                    <div className="row">
                                    <div className="col-xs-2">
                                    </div>  
                                    <div className="col-xs-8">                

                                    <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Lista de Permissões</h3>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">

                                        
                                        <table id="tbestado" className="table table-bordered table-striped text-center ">
                                            <thead>
                                                <tr  >
                                                    <th className="col-xs-2" >
                                                        <div className="btn-group">
                                                            <a  href="/permissoes/novo" 
                                                                title="Novo Cadastro" 
                                                                data-toggle="tooltip"
                                                                 data-placement="top" 
                                                                 className="btn btn-block btn-primary">
                                                                <i className="fa fa-fw fa-asterisk"></i>
                                                             </a>
                                                        </div>
                                                    </th>
                                                    <th>#</th>
                                                    <th>Nome</th>
                                                    <th>Descrição</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody> 
                                                { permissoes.map( p =>
                                                  
                                                <tr key={p.id} >
                                                <td >
                                                <div className="btn-group" role="group" aria-label="ações">
                                                    <a  href="/permissoes/editar"
                                                    type="button" 
                                                        title="Editar"
                                                        data-toggle="tooltip"
                                                        data-placement="top"                                                      
                                                        className="btn btn-success" >
                                                        <i className="fa fa-fw fa-edit"></i>
                                                    </a>
                                                    <button type="button"    
                                                   
                                                    className="btn btn-danger" 
                                                    title="Excluir"><i className="fa fa-fw fa-close"></i>
                                                      </button>
                                                </div>
                                                </td>
                                                    <td>{p.id}</td>
                                                    <td>{p.nome}</td>
                                                    <td>{p.descricao}</td>
                                                    
                                                </tr>
                                                 ) }

                                                

                                            </tbody>
                                           {/*  <tfoot>
                                                <tr>
                                                <th>acoes</th>
                                                    <th>código</th>
                                                    <th>nome</th>
                                                    <th>sigla</th>
                                                    
                                                </tr>
                                           </tfoot> */}
                                        </table>

                                    </div>
                                    {/*   <!-- /.box-body --> */}
                                </div>
                                {/* <!-- /.box --> */}
                            
                           
                                </div>
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
               
        
        )
    }
}

export default FonteRecursoList