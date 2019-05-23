import React, {Component} from 'react'
import {cidadeGet} from './CidadeFunctions'



class EstadoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cidades:[]            
        }

       // this.onChange = this.onChange.bind(this)
        //this.onSubmit = this.onSubmit.bind(this)

    }
    
    /* onChange(e){
        this.setState({[e.target.name]: e.target.value})
    } */

    componentDidMount(){
        cidadeGet().then(cidades => {
            
                this.setState({
                    cidades:cidades                      
                   })        
        })   
        
        
    }

    render(){
        const { cidades } = this.state


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
                                <li><a href="/cidades">Cidades</a></li>
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
                                        <h3 className="box-title">Lista de Cidades</h3>
                                    <hr />
                                    <form>
                                
                                    <div className="row" >
                                    <div className="col-xs-2 col-md-2">  
                                    <div className="form-group">
                                                
                                                <select 
                                                className="form-control input-lg"                     
                                                placeholder="Selecione o Estado (UF)"
                                                id="estado" >
                                                        <option>AC</option>
                                                        <option>RO</option>
                                                       
                                                </select>
                                            </div>
                                    </div>
                                        <div className="col-xs-8">                                        
                                            <input type="text" 
                                            className="form-control input-lg "                      
                                            placeholder="Escreva o nome da cidade"                                     
                                            name="argumento" />
                                            </div>
                                        <div className="col-xs-2">
                                        <button type="submit" className="btn btn-primary btn-lg"  ><i className="fa fa-fw fa-search"></i></button>
                                        </div>
                                        
                                    </div>
                                    </form>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">

                                        
                                        <table id="tbestado" className="table table-bordered table-striped text-center ">
                                            <thead>
                                                <tr  >
                                                    <th className="col-xs-2" >
                                                        <div className="btn-group">
                                                            <a  href="/cidades/novo" 
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
                                                    <th>CEP</th>
                                                    <th>Estado</th>
                                                    <th>Regional</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody> 
                                                { cidades.map( cidade =>
                                                  
                                                <tr key={cidade.id} >
                                                <td >
                                                <div className="btn-group" role="group" aria-label="ações">
                                                    <a  href="/cidades/editar"
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
                                                    <td> {cidade.id} </td>
                                                    <td>{cidade.nome}  </td>
                                                    <td>{cidade.cep}</td>
                                                    <td>{cidade.estado_id}</td>
                                                    <td>{cidade.regionalestadual_id}</td>
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

export default EstadoList