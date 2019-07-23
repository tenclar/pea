import React, {Component} from 'react'
import {areaTematicaGet} from '../areatematica/AreaTematicaFunctions'
import {temaNovo} from './TemaFunctions'



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

class RecursoForm extends Component {
    constructor() {
        super()

        this.state = {
            fields: { nome:'', descricao:'' },
            errors:{},
            areastematicas:[]
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
    }

   
    
    onChange(e){
        e.preventDefault()
        //this.setState({[e.target.name] : e.target.type === 'number'? parseInt(e.target.value):  e.target.value})
        //this.setState({[e.target.name] : e.target.value})
        let fields = this.state.fields
        fields[e.target.name] = e.target.value.toUpperCase()
        this.setState({fields})
        
    }

    validateForm(){
        let fields = this.state.fields
        let errors = {}
        
        let formIsValid = true

        if (!fields["nome"]) {
            formIsValid = false            
            errors["nome"] = "Por Favor, Informe Tema."
            
        }

        if (!fields["descricao"]) {
            formIsValid = false
            errors["descricao"] = "Por Favor, Informe uma Decrição"

        }
        
        if (!fields["areastematicaId"]) {
            formIsValid = false
            errors["areastematicaId"] = "*Selecione Uma Área Temática"

        }
        if (typeof fields["areastematicaId"] !== "undefined") {
            if (fields["areastematicaId"].match(0)) {
                formIsValid = false;
                errors["areastematicaId"] = "*Selecione Uma Área Temática 0";
            }
        }

        this.setState({ errors:errors })
        return formIsValid


    }

    onSubmit(e){
        e.preventDefault()

        let fields = {}
        if(this.validateForm()) {
      
            fields["nome"] = ''
            fields["descricao"] = ''
           

            this.setState({ fields:fields})
            temaNovo(this.state.fields).then(res => {           
                 this.props.history.push('/temas')    
             })
            
        }
           
           

    }

    render(){

        const { errors, areastematicas } = this.state

        return(
            <div>
                <div className="hold-transition skin-blue sidebar-mini" >
                    <div className="wrapper">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper"   >
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Temas
                                <small>Cadastro</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Painel Principal</a></li>
                                <li><a href="/temas">Temas</a></li>
                                <li className="active">Novo</li>
                                </ol>
                            </section>

                                { /*Main content */}
                            <section className="content container" >
                            <div className="row" >
                            <div className="col-xs-10">  
                                <div className="box box-primary " >
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Informe os dados do Tema</h3>
                                    </div>
                                
                            
                                    <form noValidate onSubmit={this.onSubmit}  >
                                        <div className="box-body  ">
                                            <div className={ errors.nome !== undefined ?  "form-group has-error": "form-group "}>
                                                <label htmlFor="nome">Nome</label>
                                                <input type="text" 
                                                className="form-control input-lg  "                      
                                                placeholder="Informe o Tema"
                                                id="nome" 
                                                name="nome"

                                                value={this.state.fields.nome}
                                                onChange={this.onChange}
                                                />
                                                <div className="help-block">
                                                {errors.nome}
                                             </div>
                                            </div>
                                            <div className={ errors.descricao !== undefined ?  "form-group has-error": "form-group"}>
                                                <label htmlFor="descricao">Descrição</label>
                                                <textarea rows="6" 
                                                    className="form-control input-lg"                      
                                                    placeholder="Escreva Descrição"
                                                    id="descricao" 
                                                    name="descricao"
                                                    value={this.state.fields.descricao}
                                                    onChange={this.onChange}
                                                />
                                                <div className="help-block">
                                                {errors.descricao}
                                             </div>
                                            </div>

                                            <div className=   { errors.areastematicaId !== undefined ?  "form-group has-error": "form-group"}>
                                                <label htmlFor="areastematicaId">Área Temática</label>
                                                <select 
                                                    className="form-control input-lg"                     
                                                    placeholder="Selecione a área temática"
                                                    id="areastematicaId"
                                                    name="areastematicaId"    
                                                    
                                                    value={this.state.fields.areastematicaId}     
                                                    onChange={this.onChange}                                   
                                                    >
                                                    <option value={0} >Selecione</option>
                                                    { areastematicas.map( a => 
                                                            <option key={a.id} value={a.id}  >{a.nome}</option>
                                                            
                                                    )}
                                                </select>
                                                <div className="help-block">
                                                    {errors.areastematicaId} 
                                                    </div>
                                            </div>    

                                            
                                        
                                        
                                        </div>
                                    
                                        {JSON.stringify(this.state.fields)}
                                        <div className="box-footer ">
                                            <button type="submit" className="btn btn-primary">Salvar</button>
                                            <a href="/temas" className="btn btn-danger">Cancelar</a>
                                        </div>
                                    </form>
                                </div>

                           </div>
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

export default RecursoForm