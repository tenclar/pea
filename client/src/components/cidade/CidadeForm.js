import React, {Component} from 'react'
import {cidadeNovo} from './CidadeFunctions'
import {estadoGet} from '../estado/EstadoFunctions'
import {regionalGet} from '../regionalestadual/RegionalApi'

class CidadeForm extends Component {
    constructor() {
        super()
        this.state = {
            nome:'',
            cep: '',
            estadoid: 1,
            regionalid: 0,
            usuarioid:0,
            estados:[],
            regionais:[],
            estadoac: true  
        
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
        regionalGet().then(regionais => {
            this.setState({
                regionais:regionais                      
            })       
        })
        
    }

   
    
    onChange(e){
        e.preventDefault()
        //this.setState({[e.target.name] : e.target.type === 'number'? parseInt(e.target.value):  e.target.value})
        this.setState({[e.target.name] : e.target.value})
        
    }

    onSubmit(e){
        e.preventDefault()
 
        const cidade = {
            nome:this.state.nome,
            cep:this.state.cep,            
            estado_id:this.state.estadoid,
            regional_id:this.state.regionalid,
            usuario_id:1


        }
        cidadeNovo(cidade).then(res => {           
                this.props.history.push('/cidades')
        })
    }

    render(){

        const { estados , regionais } = this.state

        return(
            <div>
                <div className="hold-transition skin-blue sidebar-mini" >
                    <div className="wrapper">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Cidade
                                <small>Cadastro</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                                <li><a href="/cidades">cidades</a></li>
                                <li className="active">Novo</li>
                                </ol>
                            </section>

                                { /*Main content */}
                            <section className="content container" >

                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Informe os dados da Cidade</h3>
                                    </div>
                                
                            
                                    <form noValidate onSubmit={this.onSubmit} >
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label htmlFor="nome">Nome</label>
                                                <input type="text"
                                                className="form-control input-lg"                      
                                                placeholder="Escreva Nome do Estado"
                                                id="nome" 
                                                name="nome"

                                                value={this.state.nome}
                                                onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="nome">CEP</label>
                                                <input type="text"
                                                className="form-control input-lg"                      
                                                placeholder="Escreva Nome do Estado"
                                                id="nome" 
                                                name="nome"
                                                value={this.state.cep}
                                                onChange={this.onChange}
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-2">
                                                    <div className="form-group">
                                                        <label htmlFor="estadoid">Estado</label>
                                                        <select 
                                                        className="form-control input-lg"                     
                                                        placeholder="Selecione o Estado (UF)"
                                                        id="estadoid"
                                                        name="estadoid"    
                                                        type="number"
                                                        value={this.state.estadoid}     
                                                        onChange={this.onChange}                                   
                                                        >
                                                        
                                                        { estados.map( estado => 
                                                                <option key={estado.id} value={estado.id}  >{estado.sigla}</option>
                                                                
                                                        )}
                                                        </select>
                                                        
                                                    </div>                                                    
                                                
                                                </div>

                                           
                                                <div className="col-xs-4">
                                                    <div className="form-group">
                                                        <label htmlFor="regionalid">Regional</label>
                                                        <select 
                                                        className="form-control input-lg"                     
                                                        placeholder="Selecione regional"
                                                        id="regionalid"
                                                        name="regionalid" 
                                                        value={this.state.regionalid}     
                                                        onChange={this.onChange}     
                                                        >
                                                        { regionais.map( r => 
                                                                <option key={r.id} value={r.id} >{r.nome}</option>
                                                        )}                                                                
                                                                
                                                        </select>
                                                    </div>
                                                
                                                </div>
                                           

                                               
                                                <div className="col-xs-3">
                                                </div>
                                               
                                            </div>
                                        
                                        
                                        </div>
                                    

                                        <div className="box-footer">
                                            <button type="submit" className="btn btn-primary">Salvar</button>
                                            <a href="/cidades" className="btn btn-danger">Cancelar</a>
                                        </div>
                                    </form>
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
                </div>
                           
            </div>
            
        )
    }
}

export default CidadeForm