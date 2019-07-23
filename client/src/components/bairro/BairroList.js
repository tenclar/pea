import React, {Component} from 'react'
import {cidadeIdGet} from '../cidade/CidadeFunctions'
import {estadoGet} from '../estado/EstadoFunctions'
import {bairroGet} from './BairroFunctions'




class EstadoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estadoid: 0,
            cidadeId: 0,
            argumento:'',
            cidades:[],
            estados:[],
            bairros:[],
            messages:'',
            isLoad:false            
        }

        this.onChange = this.onChange.bind(this)
        this.onChangeSelect = this.onChangeSelect.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
   

    componentDidMount(){
       
        estadoGet().then(estados => {
            this.setState({
                estados:estados
            })
        }) 

       /*  bairroGet().then(bairros => {
            this.setState({
                bairros:bairros
            })
        }) */

        
         this.setState( { isLoad : true } )
         const arg = this.state.argumento   
       bairroGet(arg).then( bairros => {
            this.setState({
                bairros:bairros,
                isLoad:false                      
             })        
        })  
        
    }

    componentWillReceiveProps(newProps){
        //console.log(newProps)
    }

    onChange(e){
        e.preventDefault()
        this.setState({[ e.target.name]: e.target.value })
    }



    onChangeSelect(e){
        e.preventDefault()
        
        this.setState({[ e.target.name]: e.target.value })
        
        cidadeIdGet(e.target.value).then(cidades => {
            this.setState({
                cidades:cidades
            })
        })         
    }

    onSubmit(e){
        e.preventDefault()
        this.setState( { bairros:[], messages:'', isLoad : true } )
        const arg = this.state.argumento   
        bairroGet(arg).then( bairros => {
            console.log(bairros.length)
            this.setState({
                bairros:bairros,
                isLoad:false                      
             }) 
             if(bairros.length === 0){ 
                this.setState({ messages: 'nenhum dado encontrado'}) 
             }       
        })  
    }

    render(){
        const { cidades, estados, bairros, messages } = this.state


        return(
        
            
                
                        
                        <div className="content-wrapper"  >
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1> Bairros
                                <small>Cadastro </small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                                <li><a href="/cidades">Bairros</a></li>
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
                                                    onChange={this.onChangeSelect}
                                                    value={this.state.estadoid}
                                                    name="estadoid"
                                                    id="estadoid" >
                                                    <option value={0}> Selecione</option>
                                                    { 
                                                        estados.map( estado => 
                                                            <option  key={estado.id} value={estado.id} > {estado.sigla} </option>
                                                        )
                                                    }
                                                    </select>
                                                </div>
                                        </div>
                                        <div className="col-xs-3 col-md-3">  
                                        <div className="form-group ">
                                                    
                                                    <select 
                                                    className="form-control input-lg"                     
                                                    placeholder="Selecione a cidade"
                                                    onChange={this.onChange}
                                                    value={this.state.estadoid}
                                                    name="cidadeid"
                                                    id="cidadeid" >
                                                    { 
                                                        cidades.map( cidade => 
                                                            <option  key={cidade.id} value={cidade.id} > {cidade.nome} </option>
                                                        )
                                                    }
                                                    </select>
                                                </div>
                                        </div>
                                    
                                            <div className="col-xs-5">                                        
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

                                        {this.state.isLoad && <img src="/img/loading.gif" alt='Carregando...' />  }
                                            <table id="tbbairro" className="table table-bordered table-striped text-center ">
                                                <thead>
                                                    <tr  >
                                                        <th className="col-xs-2" >
                                                            <div className="btn-group">
                                                                <a  href="/bairros/novo" 
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
                                                        <th>Zona</th>
                                                        <th>Cidade</th>
                                                        <th>Estado</th>
                                                        
                                                        
                                                    
                                                    </tr>
                                                </thead>
                                            
                                                <tbody> 
                                            
                                                    { bairros.map( bairro =>
                                                    
                                                        <tr key={bairro.id} >
                                                    <td >
                                                    <div className="btn-group" role="group" aria-label="ações">
                                                        <a  href="/bairros/editar"
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
                                                    
                                                        <td> {bairro.id} </td>
                                                        <td>{bairro.nome}  </td>
                                                        <td>{bairro.zona}</td>
                                                        <td>{bairro.cidade.nome}  </td>                                                        
                                                        <td>{bairro.cidade.estado.sigla}</td>
                                                        
                                                    
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

export default EstadoList