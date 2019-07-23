import React, {Component} from 'react'
//import {cidadeNovo} from './CidadeFunctions'
import {estadoGet} from '../estado/EstadoFunctions'



/* const initialState = {
 
        nome:'',
        cep: '',
        estadoid: 1,
        regionalid: 0,
        usuarioid:0,
        estados:[],
        regionais:[],
        estadoac: true  
        nome:'', cep:'', estadoId:0, regionalId:0, usuarioId:1
        nome:'', cep:'', estadoId:'',regionalId:'', usuarioId:''
} */

class CidadeForm extends Component {
    constructor() {
        super()
        this.state = {
            fields:{nome:'', zona:''},
            errors:{ },
            estados:[],
            cidades:[]
            
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
       
        
    }

   
    
    onChange(e){
        e.preventDefault()
        //this.setState({[e.target.name] : e.target.type === 'number'? parseInt(e.target.value):  e.target.value})
        //this.setState({[e.target.name] : e.target.value})
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({fields})
        
    }

    validateForm(){
        let fields = this.state.fields
        let errors = {}
        
        let formIsValid = true

        if (!fields["nome"]) {
            formIsValid = false            
            errors["nome"] = "Por Favor, Informe nome da cidade."
            
        }

        if (!fields["cep"]) {
            formIsValid = false
            errors["cep"] = "Por Favor, Informe o CEP da cidade"

        }

        if (typeof fields["cep"] !== "undefined") {
            if (!fields["cep"].match(/^[0-9]{8}$/)) {
                formIsValid = false;
                errors["cep"] = "*Somente Números.";
            }
        }

        if (!fields["estadoId"]) {
            formIsValid = false
            errors["estadoId"] = "*Selecione Um Estado."

        }

        if (typeof fields["estadoId"] !== "undefined") {
            if (fields["estadoId"].match(0)) {
                formIsValid = false;
                errors["estadoId"] = "*Selecione Um Estado.";
            }
        }

        if (!fields["regionalId"]) {
            formIsValid = false
            errors["regionalId"] = "*Selecione Uma Regional"

        }
        if (typeof fields["regionalId"] !== "undefined") {
            if (fields["regionalId"].match(0)) {
                formIsValid = false;
                errors["regionalId"] = "*Selecione Uma Regional.";
            }
        }

        this.setState({ errors:errors })
        return formIsValid


    }

    onSubmit(e){
        e.preventDefault()
 
        /* const cidade = {
            nome:this.state.nome,
            cep:this.state.cep,            
            estado_id:this.state.estadoid,
            regional_id:this.state.regionalid,
            usuario_id:1


        }
        cidadeNovo(cidade).then(res => {           
                this.props.history.push('/cidades')
        }) */

        if(this.validateForm()) {
            let fields = {}
            fields["nome"] = ''
            fields["cep"] = ''
            fields["estadoId"] = 0
            fields["regionalId"] = 0
            fields["usuarioId"] = 1

            this.setState({ fields:fields})

            
        }
    }

    render(){

        const { fields, estados , regionais, errors } = this.state

        return(
            <div>
                <div className="hold-transition skin-blue sidebar-mini" >
                    <div className="wrapper">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Bairro
                                <small>Cadastro</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Painel Principal</a></li>
                                <li><a href="/bairros">bairros</a></li>
                                <li className="active">Novo</li>
                                </ol>
                            </section>

                                { /*Main content */}
                            <section className="content container" >

                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Informe os dados do Bairro</h3>
                                    </div>
                                
                            
                                    <form noValidate onSubmit={this.onSubmit} >
                                        <div className="box-body">
                                            <div className={ errors.nome !== undefined ?  "form-group has-error": "form-group"}>
                                                <label htmlFor="nome">Nome</label>
                                                <input type="text"
                                                className="form-control input-lg"                      
                                                placeholder="Escreva Nome do Estado"
                                                id="nome" 
                                                name="nome"

                                                value={this.state.fields.nome}
                                                onChange={this.onChange}
                                                />
                                                <div className="help-block">
                                                {errors.nome}
                                             </div>
                                            </div>
                                            <div className={ errors.cep !== undefined ?  "form-group has-error": "form-group"}>
                                                <label htmlFor="nome">CEP</label>
                                                <input type="text"
                                                className="form-control input-lg"                      
                                                placeholder="Escreva Nome do Estado"
                                                id="cep" 
                                                name="cep"
                                                value={this.state.fields.cep}
                                                onChange={this.onChange}
                                                />
                                                <div className="help-block">
                                                {errors.cep}
                                             </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-2">
                                                    <div className=   { errors.estadoId !== undefined ?  "form-group has-error": "form-group"}>
                                                        <label htmlFor="estadoId">Estado</label>
                                                        <select 
                                                        className="form-control input-lg"                     
                                                        placeholder="Selecione o Estado (UF)"
                                                        id="estadoId"
                                                        name="estadoId"    
                                                        
                                                        value={this.state.fields.estadoId}     
                                                        onChange={this.onChange}                                   
                                                        >
                                                        <option value={0} >Selecione</option>
                                                        { estados.map( estado => 
                                                                <option key={estado.id} value={estado.id}  >{estado.sigla}</option>
                                                                
                                                        )}
                                                        </select>
                                                        <div className="help-block">
                                                            {errors.estadoId} 
                                                         </div>
                                                    </div>                                                    
                                                
                                                </div>

                                           
                                                <div className="col-xs-4">
                                                    <div className={errors.regionalId !== undefined ?  "form-group has-error": "form-group" }>
                                                        <label htmlFor="regionalId">Regional</label>
                                                        <select 
                                                        className="form-control input-lg"                     
                                                        placeholder="Selecione regional"
                                                        id="regionalId"
                                                        name="regionalId" 
                                                        value={this.state.fields.regionalId}     
                                                        onChange={this.onChange}     
                                                        >
                                                        <option value={0} >Selecione</option>
                                                        { regionais.map( r => 
                                                                <option key={r.id} value={r.id} >{r.nome}</option>
                                                        )}                                                                
                                                                
                                                        </select>
                                                        <div className="help-block">
                                                            {errors.regionalId}
                                                         </div>
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