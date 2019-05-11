import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/usuarios/Login'
import Cadastro from './components/Cadastro'
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import SidebarRight from './components/SidebarRight'
import Footer from './components/Footer'
import EstadoForm from './components/estado/EstadoForm'

function App() {

  
    
    const usuarioLink = (
      <div>
       <Route exatc path="/login" component={Login} />
       <Footer />
      </div>
    )

    const adminLink = (
      <div>
        <Navbar />
          <Sidebar />
            
              
              <Route exatc path="/home" component={Home} />
              <Route exatc path="/cadastro" component={Cadastro} />            
              <Route exatc path="/profile" component={Profile} /> 
              <Route exatc path="/estados/novo" component={EstadoForm} /> 
              
            
            <Footer />
          <SidebarRight />
      </div>
    )
       
       
  

    return (
    
      
      <Router>
      
        <div className="App">    

        {/* localStorage.usuariotoken ? adminLink: usuarioLink */}

        {localStorage.usuariotoken ?  usuarioLink: adminLink}
        
        
        </div>      
      </Router>
    )
  }


export default App;
