import React, {Component} from 'react'
import {temaGet} from './TemaFunctions'
import {areaTematicaGet} from '../areatematica/AreaTematicaFunctions'




class TemaList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            areatematicaid: 0,
            argumento:'',
            areastematicas:[],
            temas:[],
            messages:'',
            isLoad: false            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
   

    componentDidMount(){
       

        areaTematicaGet().then(areastematicas => {
            this.setState({
                areastematicas:areastematicas
            })
        })

       /*  
         this.setState( { isLoadCidade : true } )
         const arg = this.state.argumento   
       temaGet(arg).then( temas => {
            this.setState({
                temas:temas,
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
        this.setState( { temas:[], messages:'', isLoad : true } )
        const arg = this.state.argumento   
        temaGet(arg).then( temas => {
            console.log(temas.length)
            this.setState({
                temas: temas,
                isLoad: false                      
             }) 
             if(temas.length === 0){ 
                this.setState({ messages: 'nenhum dado encontrado'}) 
             }       
        })  
    }

    render(){
        const { temas, areastematicas, messages } = this.state


        return(
        
            
                
                        
                        <div className="content-wrapper"  >
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Temas
                                <small>Cadastro de Temas</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                                <li><a href="/temas">Temas</a></li>
                                <li className="active">Lista</li>
                                </ol>
                            </section>

                                { /*Main content */}
                            <section className="content container-resposive" >

                                     
                                <div className="row">
                                  
                                    <div className="col-xs-12">                

                                        <div className="box">
                                        <div className="box-header">
                                            <h3 className="box-title">Lista de Temas</h3>
                                        <hr />
                                        <form noValidate onSubmit={this.onSubmit} >
                                    
                                        <div className="row" >
                                        <div className="col-xs-2 col-md-3">  
                                        <div className="form-group ">
                                                    
                                                    <select 
                                                    className="form-control input-lg"                     
                                                    placeholder="Selecione área Temática)"
                                                    onChange={this.onChange}
                                                    value={this.state.areatematicaid}
                                                    name="areatematicaid"
                                                    id="areatematicaid" >
                                                    <option >Área Temática</option>
                                                    { 
                                                        areastematicas.map( a => 
                                                            <option  key={a.id} value={a.id} > {a.nome} </option>
                                                        )
                                                    }
                                                    </select>
                                                </div>
                                        </div>
                                    
                                            <div className="col-xs-8">                                        
                                                <input type="text" 
                                                className="form-control input-lg  "                      
                                                placeholder="Escreva o nome do tema"  
                                                onChange={this.onChange} 
                                                value={this.state.argumento}                                  
                                                name="argumento" />
                                            </div>
                                            <div className="col-xs-1">
                                                <button type="submit" className="btn btn-primary btn-lg"  title="Localizar" ><i className="fa fa-fw fa-search"></i></button>
                                            </div>
                                            
                                        </div>
                                        <div className=" text-white bg-danger text-center font-weight-bold" ><h3   >{messages}</h3></div>
                                        </form>
                                        </div>
                                        {/* <!-- /.box-header --> */}
                                        <div className="box-body">

                                        {this.state.isLoadCidade && <img src="/img/loading.gif" alt='Carregando...' />  }
                                            <table id="tbtema" className="table table-bordered table-striped text-center ">
                                                <thead>
                                                    <tr  >
                                                        <th className="col-xs-2" >
                                                            <div className="btn-group">
                                                                <a  href="/temas/novo" 
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
                                                        <th>Área Temática</th>
                                                        
                                                    
                                                    </tr>
                                                </thead>
                                            
                                                <tbody> 
                                            
                                                    { temas.map( tema =>
                                                    
                                                        <tr key={tema.id} >
                                                    <td >
                                                    <div className="btn-group" role="group" aria-label="ações">
                                                        <a  href="/temas/editar"
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
                                                    
                                                        <td> {tema.id} </td>
                                                        <td>{tema.nome}  </td>
                                                        <td>{tema.descricao}</td>
                                                        <td>{tema.areastematica.nome}</td>
                                                        
                                                    
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

export default TemaList