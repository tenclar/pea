import React, {Component} from 'react'
import UsuarioForm from './UsuarioForm'
import {usuarioGet} from './UsuarioFunctions'


class UsuarioList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuarios:[],
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
        usuarioGet(arg).then( usuarios => {
            console.log(usuarios.length)
            this.setState({
                usuarios:usuarios,
                isLoading:false                      
             }) 
             if(usuarios.length === 0){ 
                this.setState({ messages: 'nenhum dado encontrado'}) 
             }       
        })  
    }

    componentDidMount(){
        usuarioGet().then(usuarios => {
            
                this.setState({
                    usuarios:usuarios                      
                   })        
        })   
        
        
    }

    render(){
        const { usuarios, messages } = this.state


        return(
            
            
                    <div className="wrapper clearfix">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Usuario
                                <small>Cadastro de Usuario</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                                <li><a href="/usuarios">Usuarios</a></li>
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
                                        <h3 className="box-title">Lista de Usuarios</h3>
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

                                        
                                        <table id="tbusuario" className="table table-bordered table-striped text-center ">
                                            <thead>
                                                <tr  >
                                                    <th className="col-xs-2" >
                                                        <div className="btn-group">
                                                            <button  
                                                                type="button"
                                                                title="Novo Usuário"                                                                 
                                                                 data-placement="top"
                                                                                                                                 
                                                                 data-toggle="modal" data-target="#modal-usuario" 
                                                                 className="btn btn-block btn-primary">
                                                                <i className="fa fa-fw fa-asterisk"></i>
                                                             </button>
                                                        </div>
                                                    </th>
                                                    <th>#</th>
                                                    <th>Nome</th>
                                                    <th>e-mail</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody> 
                                                { usuarios.map( usuario =>
                                                  
                                                <tr key={usuario.id} >
                                                <td >
                                                <div className="btn-group" role="group" aria-label="ações">
                                                    <a  href="/usuarios/editar"
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
                                                    <td> {usuario.id} </td>
                                                    <td>{usuario.nome}  </td>
                                                    <td>{usuario.email}</td>
                                                    
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
                        <UsuarioForm />
                    </div>
               
                    
        )
    }
}

export default UsuarioList