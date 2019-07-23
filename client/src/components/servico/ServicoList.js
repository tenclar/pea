import React, {Component} from 'react'
import {servicoGet} from './ServicoFunctions'
import {servicoCategoriaGet} from '../servicocategoria/ServicoCategoriaFunctions'




class ServicoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categoriaid: 1,
            argumento:'',
            servicos:[],
            categorias:[],
            messages:'',
            isLoad:false            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
   

    componentDidMount(){
       

        servicoCategoriaGet().then(categorias => {
            this.setState({
                categorias:categorias
            })
        })

       /*  
         this.setState( { isLoadServico : true } )
         const arg = this.state.argumento   
       servicoGet(arg).then( servicos => {
            this.setState({
                servicos:servicos,
                isLoadServico:false                      
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
        this.setState( { servicos:[], messages:'', isLoad : true } )
        const arg = this.state.argumento   
        servicoGet(arg).then( servicos => {
            console.log(servicos.length)
            this.setState({
                servicos:servicos,
                isLoad:false                      
             }) 
             if(servicos.length === 0){ 
                this.setState({ messages: 'nenhum dado encontrado'}) 
             }       
        })  
    }

    render(){
        const { servicos, categorias, messages } = this.state


        return(
        
            
                
                        
                        <div className="content-wrapper"  >
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Servicos
                                <small>Cadastro de Categorias de Servicos</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                                <li><a href="/servicos">Categorias de Servicos</a></li>
                                <li className="active">Lista</li>
                                </ol>
                            </section>

                                { /*Main content */}
                            <section className="content container-resposive" >

                                     
                                <div className="row">
                                   
                                    <div className="col-xs-12">                

                                        <div className="box">
                                        <div className="box-header">
                                            <h3 className="box-title">Lista de Categorias de Serviços</h3>
                                        <hr />
                                        <form noValidate onSubmit={this.onSubmit} >
                                    
                                        <div className="row" >
                                        <div className="col-xs-2 col-md-2">  
                                        <div className="form-group ">
                                                    
                                                    <select 
                                                    className="form-control input-lg"                     
                                                    placeholder="Selecione o Estado (UF)"
                                                    onChange={this.onChange}
                                                    value={this.state.categoriaid}
                                                    name="categoriaid"
                                                    id="categoriaid" >
                                                    { 
                                                        categorias.map( c => 
                                                            <option  key={c.id} value={c.id} > {c.nome} </option>
                                                        )
                                                    }
                                                    </select>
                                                </div>
                                        </div>
                                    
                                            <div className="col-xs-8">                                        
                                                <input type="text" 
                                                className="form-control input-lg  "                      
                                                placeholder="Escreva o nome do Serviço"  
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

                                        {this.state.isLoadServico && <img src="/img/loading.gif" alt='Carregando...' />  }
                                            <table id="tbestado" className="table table-bordered table-striped text-center ">
                                                <thead>
                                                    <tr  >
                                                        <th className="col-xs-2" >
                                                            <div className="btn-group">
                                                                <a  href="/servicos/novo" 
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
                                                        <th>Categoria</th>
                                                        
                                                    
                                                    </tr>
                                                </thead>
                                            
                                                <tbody> 
                                            
                                                    { servicos.map( s =>
                                                    
                                                        <tr key={s.id} >
                                                    <td >
                                                    <div className="btn-group" role="group" aria-label="ações">
                                                        <a  href="/servicos/editar"
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
                                                    
                                                        <td> {s.id} </td>
                                                        <td>{s.nome}  </td>
                                                        <td>{s.descricao}</td>
                                                        <td>{s.categoria.nome}</td>
                                                        
                                                    
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

export default ServicoList