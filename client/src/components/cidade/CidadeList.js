import React, {Component} from 'react'
import {cidadeGet} from './CidadeFunctions'
import {estadoGet} from '../estado/EstadoFunctions'




class CidadeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estadoid: 1,
            argumento:'',
            cidades:[],
            estados:[],
            messages:'',
            isLoadCidade:false            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
   

    componentDidMount(){
       

        estadoGet().then(estados => {
            this.setState({
                estados:estados
            })
        })

       /*  
         this.setState( { isLoadCidade : true } )
         const arg = this.state.argumento   
       cidadeGet(arg).then( cidades => {
            this.setState({
                cidades:cidades,
                isLoadCidade:false                      
             })        
        })  
         */
    }

    componentWillReceiveProps(newProps){
        //console.log(newProps)
    }

    onChange(e){
        e.preventDefault()
        this.setState({[ e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
        this.setState( { cidades:[], messages:'', isLoadCidade : true } )
        const arg = this.state.argumento   
        cidadeGet(arg).then( cidades => {
            console.log(cidades.length)
            this.setState({
                cidades:cidades,
                isLoadCidade:false                      
             }) 
             if(cidades.length === 0){ 
                this.setState({ messages: 'nenhum dado encontrado'}) 
             }       
        })  
    }

    render(){
        const { cidades, estados, messages } = this.state


        return(
        
            
                
                        
                        <div className="content-wrapper"  >
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Cidades
                                <small>Cadastro de Cidades</small>
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
                                   
                                    <div className="col-xs-12">                

                                        <div className="box">
                                        <div className="box-header">
                                            <h3 className="box-title">Lista de Cidades</h3>
                                        <hr />
                                        <form noValidate onSubmit={this.onSubmit} >
                                    
                                        <div className="row" >
                                        <div className="col-xs-2 col-md-2">  
                                        <div className="form-group ">
                                                    
                                                    <select 
                                                    className="form-control input-lg"                     
                                                    placeholder="Selecione o Estado (UF)"
                                                    onChange={this.onChange}
                                                    value={this.state.estadoid}
                                                    name="estadoid"
                                                    id="estadoid" >
                                                    { 
                                                        estados.map( estado => 
                                                            <option  key={estado.id} value={estado.id} > {estado.sigla} </option>
                                                        )
                                                    }
                                                    </select>
                                                </div>
                                        </div>
                                    
                                            <div className="col-xs-8">                                        
                                                <input type="text" 
                                                className="form-control input-lg  "                      
                                                placeholder="Escreva o nome da cidade"  
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

                                        {this.state.isLoadCidade && <img src="/img/loading.gif" alt='Carregando...' />  }
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
                                                        <td>{cidade.estado.sigla}</td>
                                                        
                                                    
                                                    </tr>
                                                
                                                    )}

                                                    

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
                    
             
        
        )
    }
}

export default CidadeList