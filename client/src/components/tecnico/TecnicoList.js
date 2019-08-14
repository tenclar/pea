import React, {Component} from 'react'
import {tecnicoGet} from './TecnicoFunctions'


class TecnicoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tecnicos:[],
            messages:'',
            argumento:'',
            isLoading:false            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        this.setState( { cidades:[], messages:'', isLoading : true } )
        const arg = this.state.argumento   
        tecnicoGet(arg).then( tecnicos => {
            console.log(tecnicos.length)
            this.setState({
                tecnicos:tecnicos,
                isLoading:false                      
             }) 
             if(tecnicos.length === 0){ 
                this.setState({ messages: 'nenhum dado encontrado'}) 
             }       
        })  
    }

    componentDidMount(){
        tecnicoGet().then(tecnicos => {
            
                this.setState({
                    tecnicos:tecnicos                      
                   })        
        })   
        
        
    }

    render(){
        const { tecnicos, messages } = this.state


        return(
            
            
                    <div className="wrapper clearfix">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Técnico
                                <small>Cadastro de Técnico</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Painel Principal</a></li>
                                <li><a href="/tecnicos">Tecnicos</a></li>
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
                                        <h3 className="box-title">Lista de Tecnicos</h3>
                                        <hr />
                                        <form noValidate onSubmit={this.onSubmit} >
                                
                                    <div className="row" >
                                   
                                   
                                        <div className="col-xs-10">                                        
                                            <input type="text" 
                                            className="form-control input-lg  "                      
                                            placeholder="Escreva o usuário"  
                                            onChange={this.onChange} 
                                            value={this.state.argumento}                                  
                                            name="argumento" />
                                        </div>
                                        <div className="col-xs-2">
                                            <button type="submit" className="btn btn-primary btn-lg"  title="Localizar" ><i className="fa fa-fw fa-search"></i></button>
                                        </div>
                                        
                                    </div>
                                    <div className=" text-white bg-danger text-center font-weight-bold" ><h3   >{messages}</h3></div>
                                    </form>
                                    </div>
                                    {/* <!-- /.box-header --> */}
                                    <div className="box-body">

                                        
                                        <table id="tbtecnico" className="table table-bordered table-striped text-center ">
                                            <thead>
                                                <tr  >
                                                    <th className="col-xs-2" >
                                                        <div className="btn-group">
                                                            <a href="/tecnicos/novo"
                                                                type="button"
                                                                title="Novo Usuário"                                                                 
                                                                 data-placement="top"                                                                                                                               
                                                                 
                                                                 className="btn btn-block btn-primary">
                                                                <i className="fa fa-fw fa-asterisk"></i>
                                                             </a>
                                                        </div>
                                                    </th>
                                                    <th>#</th>
                                                    <th>Nome</th>
                                                    <th>e-mail</th>
                                                    <th>Setor</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody> 
                                                { tecnicos.map( tecnico =>
                                                  
                                                <tr key={tecnico.id} >
                                                <td >
                                                <div className="btn-group" role="group" aria-label="ações">
                                                    <a  href="/tecnicos/editar"
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
                                                    <td> {tecnico.id} </td>
                                                    <td>{tecnico.nome}  </td>
                                                    <td>{tecnico.email}</td>
                                                    <td>setor</td>
                                                    
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

export default TecnicoList