import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {

    constructor(){
      super()
      this.state = {
          nome:'',
          usuario:'',
          cargo:'',
          email:''
      }
    }

    componentDidMount() {
     // const token = localStorage.usuariotoken
      //const decoded = jwt_decode(token)
      const decoded = { 
                        nome:'Tenclar Valus da Silva', 
                        email:'tenclarvalus@gmail.com',
                        usuario:'tenclar.valus',
                        cargo:'Analista de Sistemas',
                        departamento:'DINFO',
                        dataat: '20 de março de 2019'
                      
                      }
      this.setState({
          nome: decoded.nome,
          usuario: decoded.usuario,
          cargo: decoded.cargo,
          dataat: decoded.dataat,
          departamento: decoded.departamento,
          email: decoded.email
      })
    }
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usuariotoken')
        this.props.history.push('/')
    }

    render(){

       /*  const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
               
            </ul>
        )

        const usuarioLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Usuário
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cadastro" className="nav-link">
                        Cadastro
                    </Link>
                </li>
                <li className="nav-item">
                    <button type="button"  style={{"background": "none" ,"border": "none"}} onClick={this.logOut.bind(this)}  className="nav-link">
                        Sair
                    </button>
                   
                </li>
            </ul>
        ) */
        
        return (
            
             
            <div className="main-header">
                            
                <Link to="/" className="logo">               
                    <span className="logo-mini"><b>P</b>EA</span>              
                    <span className="logo-lg"><b>Painel E-</b>AÇÕES</span>
                </Link>
                
                <nav className="navbar navbar-static-top" role="navigation">
                  
                  <a href="##" className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                  </a>
                  
                  <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                      
                      {/* 
                      <li className="dropdown messages-menu">
                        
                        <a href="##" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-envelope-o"></i>
                          <span className="label label-success">4</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="header">You have 4 messages</li>
                          <li>
                            
                            <ul className="menu">
                              <li>
                                <a href="##">
                                  <div className="pull-left">                                    
                                    <img src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User avatar" />
                                  </div>
                                 
                                  <h4>
                                    Support Team
                                    <small><i className="fa fa-clock-o"></i> 5 mins</small>
                                  </h4>
                                  
                                  <p>Why not buy a new awesome theme?</p>
                                </a>
                              </li>
                              
                            </ul>
                            
                          </li>
                          <li className="footer"><a href="##">See All Messages</a></li>
                        </ul>
                      </li>
                      */}
            
                      {/* 
                      <li className="dropdown notifications-menu">
                        
                        <a href="##" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-bell-o"></i>
                          <span className="label label-warning">10</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="header">You have 10 notifications</li>
                          <li>
                            
                            <ul className="menu">
                              <li>
                                <a href="##">
                                  <i className="fa fa-users text-aqua"></i> 5 new members joined today
                                </a>
                              </li>
                              
                            </ul>
                          </li>
                          <li className="footer"><a href="##">View all</a></li>
                        </ul>
                      </li>
                      */}
                     {/*
                      <li className="dropdown tasks-menu">
                        
                        <a href="##" className="dropdown-toggle" data-toggle="dropdown">
                          <i className="fa fa-flag-o"></i>
                          <span className="label label-danger">9</span>
                        </a>
                        <ul className="dropdown-menu">
                          <li className="header">You have 9 tasks</li>
                          <li>
                            
                            <ul className="menu">
                              <li>
                                <a href="##">
                                  
                                  <h3>
                                    Design some buttons
                                    <small className="pull-right">20%</small>
                                  </h3>
                                  
                                  <div className="progress xs">
                                    
                                  
                                    <div className="progress-bar progress-bar-aqua" style={{"width": "20%"}} role="progressbar"
                                         aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">20% Complete</span>
                                    </div>
                                  </div>
                                </a>
                              </li>
                              
                            </ul>
                          </li>
                          <li className="footer">
                            <a href="##">View all tasks</a>
                          </li>
                        </ul>
                      </li>
                    */}
                      <li className="dropdown user user-menu">
                       
                        <a href="##" className="dropdown-toggle" data-toggle="dropdown">
                       
                          <img src="data:image/jpeg;base64,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" className="user-image" alt="User avatar" />
                       
                          <span className="hidden-xs">{this.state.usuario}</span>
                        </a>
                        <ul className="dropdown-menu">
                          
                          <li className="user-header">
                            <img src="data:image/jpeg;base64,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" className="img-circle" alt="User " />
            
                            <p>
                            {this.state.nome} 
                            <small >{this.state.cargo}</small>
                              <small>{this.state.dataat}</small>
                            </p>
                          </li>
                          
                          <li className="user-body">
                            <div className="row">
                              <div className="col-xs-4 text-center">
                                <a href="##">Followers</a>
                              </div>
                              <div className="col-xs-4 text-center">
                                <a href="##">Sales</a>
                              </div>
                              <div className="col-xs-4 text-center">
                                <a href="##">Friends</a>
                              </div>
                            </div>
                            
                          </li>
                          
                          <li className="user-footer">
                            <div className="pull-left">
                              <a href="##" className="btn btn-default btn-flat">Profile</a>
                            </div>
                            <div className="pull-right">
                              <a href="##" className="btn btn-default btn-flat">Sign out</a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      
                      <li>
                        <a href="##" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                      </li>
                    </ul>
                  </div>
                  
                </nav>

        
                    
            </div>
            

            /* 
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounder">
                <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggle-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usuariotoken ? usuarioLink: loginRegLink}
                </div>
            </nav> */
        )

    }
    
}


export default withRouter(Navbar)