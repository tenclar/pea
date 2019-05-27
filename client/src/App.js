import React from 'react';


import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import SidebarRight from './components/SidebarRight'
import Footer from './components/Footer'
import EstadoForm from './components/estado/EstadoForm'
import EstadoList from './components/estado/EstadoList'

import CidadeList from './components/cidade/CidadeList'
import CidadeForm from './components/cidade/CidadeForm'
import AcoesForm from './components/acoes/AcoesForm'
import AcoesFechamentoForm from './components/acoes/AcoesFechamentoForm'

function App() {

    return (
    
      <Router>
      
        <div className="App">    

        <Navbar />
        <Sidebar />
          
            
            <Route exact path="/" component={Home} />
            <Route exact path="/acoes/cadastro" component={AcoesForm} />
            <Route exact path="/acoes/fechamento" component={AcoesFechamentoForm} />
                     
            <Route exact path="/profile" component={Profile} /> 
            
            <Route exact path="/estados/novo" component={EstadoForm} /> 
            <Route exact path="/estados/editar" component={EstadoForm} /> 
            <Route exact path="/estados" component={EstadoList} /> 
            
            <Route exact path="/cidades" component={CidadeList} /> 
            <Route exact path="/cidades/novo" component={CidadeForm} /> 
           
          <Footer />
        <SidebarRight />
     
        {/* localStorage.usuariotoken ? adminLink: usuarioLink */}

        {/* localStorage.usuariotoken ?  usuarioLink: adminLink */}
        
        
          </div>      
      </Router>
    )
  }


export default App;
