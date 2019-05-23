import React, {Component} from 'react'

import {regionalGet} from './RegionalApi'


class RegionalList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            regionais:[]            
        }

       // this.onChange = this.onChange.bind(this)
        //this.onSubmit = this.onSubmit.bind(this)

    }
    
    /* onChange(e){
        this.setState({[e.target.name]: e.target.value})
    } */

    componentDidMount(){
        regionalGet().then(regionais => {
            
                this.setState({
                    regionais:regionais                      
                   })        
        })   
        
        
    }

    render(){
        const { regionais } = this.state


        return(
            
            
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
                                        <h3 className="box-title">Lista de Estados</h3>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">

                                        
                                        <table id="tbestado" className="table table-bordered table-striped text-center ">
                                            <thead>
                                                <tr  >
                                                    <th className="col-xs-2" >
                                                        <div className="btn-group">
                                                            <a  href="/estados/novo" 
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
                                                { regionais.map( regional =>
                                                  
                                                <tr key={regional.id} >
                                                <td >
                                                <div className="btn-group" role="group" aria-label="ações">
                                                    <a  href="/estados/editar"
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
                                                    <td> {regional.id} </td>
                                                    <td>{regional.nome}  </td>
                                                    <td>{regional.descricao}</td>
                                                    
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

export default RegionalList