import React, {Component} from 'react'
//import {usuarioNovo} from './UsuarioFunctions'

const initState = {
    nome:'',
    email:'',
    password:'',
    messages:'' ,   
    fields:{nome:'', email:'', password: ''},
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


    
    validateForm(){
      let fields = this.state.fields
      let errors = {}
      
      let formIsValid = true

      if (!fields["nome"]) {
          formIsValid = false            
          errors["nome"] = "Por Favor, Informe nome. "
          
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
        

          this.setState({ fields:fields})
          console.log("Usuario: "+this.state.fields)
          
      }

    }

    render(){

      const {  errors } = this.state
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
                        placeholder="Escreva Nome do Usuario"
                        id="nome" 
                        name="nome"
                        value={this.state.fields.nome}
                        onChange={this.onChange}
                        />
                        <div className="help-block">{errors.nome}</div>
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
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger pull-left" onClick={this.onCancel}   data-dismiss="modal">Close</button>
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