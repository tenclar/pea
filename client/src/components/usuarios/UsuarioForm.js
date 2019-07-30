import React, {Component} from 'react'
//import {usuarioNovo} from './UsuarioFunctions'
import {orgaoGet} from '../orgao/OrgaoFunctions'
import {setorGet} from '../setor/SetorFunctions'
import {cargoGet} from '../cargo/CargoFunctions'

const initState = {
    nome:'',
    email:'',
    password:'',
    messages:'' ,
    cargos:[],
    setores:[],
    orgaos:[],   
    fields:{nome:'', sobrenome:'', email:'', password: '', cpf:''},
    errors:{}

}

class UsuarioForm extends Component {
    constructor(props) {
        super(props)
        this.state = initState

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onCancel = this.onCancel.bind(this)
    }

    componentDidMount(){
      orgaoGet().then(orgaos => {            
          this.setState({
            orgaos:orgaos                      
          })        
        })

        setorGet().then(setores => {            
          this.setState({
            setores:setores                      
          })        
        })

        cargoGet().then(cargos => {            
          this.setState({
            cargos:cargos                      
          })        
        })
    }
    
    validateForm(){
      let fields = this.state.fields
      let errors = {}
      
      let formIsValid = true

      if (!fields["nome"]) {
          formIsValid = false            
          errors["nome"] = "Por Favor, Informe nome. "
          
      }
      if (!fields["sobrenome"]) {
        formIsValid = false            
        errors["sobrenome"] = "Por Favor, Informe sobrenome. "
        
    }

    if (!fields["cpf"]) {
      formIsValid = false            
      errors["cpf"] = "Por Favor, Informe CPF. "
      
    }
      if (!fields["email"]) {
          formIsValid = false
          errors["email"] = "Por Favor, Informe e-mail "

      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Por vavor, entre com e-mail válido. " ;
        }
      }

      if (!fields["password"]) {
        formIsValid = false
        errors["password"] = "Por Favor, Informe uma senha de 6 dígitos"

    }

      if (typeof fields["password"] !== "undefined") {
          if (!fields["password"].match(/^[0-9]{6}$/)) {
              formIsValid = false;
              errors["password"] = "* mínimo 6 digitos.";
          }
      }
     

      if (typeof fields["password"] !== "undefined") {
          if (fields["password"].match(/\D/g,"")) {
              formIsValid = false;
              errors["password"] = "*Somente Números";
          }
      }

      if (!fields["orgaoId"]) {
        formIsValid = false
        errors["orgaoId"] = "*Selecione Um Orgão."

    }
      if (typeof fields["orgaoId"] !== "undefined") {
        if (fields["orgaoId"].match(0)) {
            formIsValid = false;
            errors["orgaoId"] = "* Orgão inválido.";
        }
    }

    if (!fields["setorId"]) {
      formIsValid = false
      errors["setorId"] = "*Selecione Um Setor."

    }
    if (!fields["cargoId"]) {
    formIsValid = false
    errors["cargoId"] = "*Selecione Um Cargo."

    }
  

      this.setState({ errors:errors })
      return formIsValid


  }
    onCancel(e){
      this.setState(initState)

    }
    
    onChange(e){
        //this.setState({ [e.target.name]: e.target.value })
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({fields})

      this.validateForm()
    }

    onSubmit(e){
        e.preventDefault()
 
       /*  const usuario = {

            nome:this.state.nome,
            email:this.state.email,
            password: this.state.password           

        }
        usuarioNovo(usuario).then(res => {           
              //  this.props.history.push('/usuarios')
              this.setState({ messages:'Usuário Cadastrado'})
        })
         */
        if(this.validateForm()) {
          let fields = {}
          fields["nome"] = ''
          fields["email"] = ''
          fields["password"] = ''
          fields["sobrenome"] = ''
          fields["cpf"] = ''

          this.setState({ fields:fields})
          console.log("Usuario: "+this.state.fields)
          
      }

    }

    render(){

      const { cargos, setores, orgaos, errors } = this.state
        return(
           <div>
            <div className="modal fade" id="modal-usuario">
            <div className="modal-dialog">
              <div className="modal-content">
              <form noValidate onSubmit={this.onSubmit} >
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal"  aria-label="Close">
                    <span aria-hidden="false">&times;</span></button>
                  <h4 className="modal-title">Cadastro de Usuário</h4>
                </div>
                <div className="modal-body">
                    <div className={errors.nome !== undefined ?  "form-group has-error": "form-group"}>
                        <label htmlFor="nome">Nome</label>
                        <input type="text"  autoComplete="off"
                        className="form-control input-lg"                      
                        placeholder="Escreva Nome "
                        id="nome" 
                        name="nome"
                        value={this.state.fields.nome}
                        onChange={this.onChange}
                        />
                        <div className="help-block">{errors.nome}</div>
                    </div>
                    <div className={errors.sobrenome !== undefined ?  "form-group has-error": "form-group"}>
                      <label htmlFor="sobrenome">Sobrenome</label>
                      <input type="text"  autoComplete="off"
                      className="form-control input-lg"                      
                      placeholder="Escreva o Sobrenome "
                      id="sobrenome" 
                      name="sobrenome"
                      value={this.state.fields.sobrenome}
                      onChange={this.onChange}
                      />
                      <div className="help-block">{errors.sobrenome}</div>
                    </div>
                    <div className={errors.cpf !== undefined ?  "form-group has-error": "form-group"}>
                      <label htmlFor="cpf">CPF</label>
                      <input type="text"  autoComplete="off"
                      className="form-control input-lg"                      
                      placeholder="Escreva o Sobrenome "
                      id="cpf" 
                      name="cpf"
                      value={this.state.fields.cpf}
                      onChange={this.onChange}
                      />
                      <div className="help-block">{errors.cpf}</div>
                    </div>
                    <div className={errors.email !== undefined ?  "form-group has-error": "form-group"}>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" autoComplete="off"
                            className="form-control input-lg"                     
                            placeholder="Email Institucional"
                            id="email"
                            name="email"
                            value={this.state.fields.email}
                            onChange={this.onChange}
                        />
                        <div className="help-block">{errors.email}</div>
                    </div>
                    <div className={errors.password !== undefined ?  "form-group has-error": "form-group"}>
                        <label htmlFor="password">Password</label>
                        <input type="password"  autoComplete="off"
                        className="form-control input-lg"
                        name="password" 
                        placeholder="Entre com password" 
                        value={this.state.fields.password}
                        onChange={this.onChange} />
                        <div className="help-block">{errors.password}</div>
                    </div> 

                    <div className="row">
                    <div className="col-xs-4">
                            <div className=   { errors.orgaoId !== undefined ?  "form-group has-error": "form-group"}>
                                <label htmlFor="cargoId">Orgão</label>
                                <select 
                                className="form-control input-lg"                     
                                placeholder="Selecione o Orgão"
                                id="orgaoId"
                                name="orgaoId"    
                                
                                value={this.state.fields.orgaoId}     
                                onChange={this.onChange}                                   
                                >
                                <option value={0} >Selecione</option>
                                { orgaos.map( orgao => 
                                        <option key={orgao.id} value={orgao.id}  >{orgao.nome}</option>
                                        
                                )}
                                </select>
                                <div className="help-block">
                                    {errors.orgaoId} 
                                </div>
                            </div>                                                    
                        
                        </div>

                        <div className="col-xs-4">
                            <div className={errors.setorId !== undefined ?  "form-group has-error": "form-group" }>
                                <label htmlFor="setorId">Setor</label>
                                <select 
                                className="form-control input-lg"                     
                                placeholder="Selecione regional"
                                id="setorId"
                                name="setorId" 
                                value={this.state.fields.setorId}     
                                onChange={this.onChange}     
                                >
                                <option value={0} >Selecione</option>
                                { setores.map( r => 
                                        <option key={r.id} value={r.id} >{r.nome}</option>
                                )}                                                                
                                        
                                </select>
                                <div className="help-block">
                                    {errors.setorId}
                                </div>
                            </div>                        
                        </div>
                        <div className="col-xs-4">
                            <div className=   { errors.cargoId !== undefined ?  "form-group has-error": "form-group"}>
                                <label htmlFor="cargoId">Cargo</label>
                                <select 
                                className="form-control input-lg"                     
                                placeholder="Selecione o Cargo"
                                id="cargoId"
                                name="cargoId"    
                                
                                value={this.state.fields.cargoId}     
                                onChange={this.onChange}                                   
                                >
                                <option value={0} >Selecione</option>
                                { cargos.map( cargo => 
                                        <option key={cargo.id} value={cargo.id}  >{cargo.nome}</option>
                                        
                                )}
                                </select>
                                <div className="help-block">
                                    {errors.cargoId} 
                                </div>
                            </div>                                                    
                        
                        </div>

               
                        
                                        
                      </div>
            
            
            

                </div>
                <div className="modal-footer">
                  <button type="reset" className="btn btn-danger pull-left" onClick={this.onCancel}   data-dismiss="modal">Close</button>
                  <button type="submit" className="btn btn-primary"  onClick={this.onSubmit}  >Salvar</button>
                </div>
                </form>
              </div>
             {/*  <!-- /.modal-content -->  data-dismiss="modal" */}
            </div>
            {/* <!-- /.modal-dialog --> */}
          </div>
         { /* <!-- /.modal --> */}
            </div>

                         
                                
            
        )
    }
}

export default UsuarioForm