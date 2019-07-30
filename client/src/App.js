import React from 'react'


import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'


import Sidebar from './components/Sidebar'
import SidebarRight from './components/SidebarRight'
import Footer from './components/Footer'

import EstadoForm from './components/estado/EstadoForm'
import EstadoList from './components/estado/EstadoList'

import BairroList from './components/bairro/BairroList'

import RecursoForm from './components/fonterecurso/RecursoForm'
import FonteRecursoList from './components/fonterecurso/FonteRecursoList'

import CidadeList from './components/cidade/CidadeList'
import CidadeForm from './components/cidade/CidadeForm'

import AcoesForm from './components/acoes/AcoesForm'
import AcoesFechamentoForm from './components/acoes/AcoesFechamentoForm'

import AreaTematicaForm from './components/areatematica/AreaTematicaForm'
import AreaTematicaList from './components/areatematica/AreaTematicaList'

import TemaForm from './components/tema/TemaForm'
import TemaList from './components/tema/TemaList'

import ModalidadeList from './components/modalidade/ModalidadeList'
import ModalidadeForm from './components/modalidade/ModalidadeForm'


import MeioTransporteList from './components/meiotransporte/MeioTransporteList'
import MeioTransporteForm from './components/meiotransporte/MeioTransporteForm'

import PermissoesForm from './components/permissoes/PermissoesForm'
import PermissoesList from './components/permissoes/PermissoesList'

import OrgaoForm from './components/orgao/OrgaoForm'
import OrgaoList from './components/orgao/OrgaoList'

import UsuarioList from './components/usuarios/UsuarioList'

import ServicoForm from './components/servico/ServicoForm'
import ServicoList from './components/servico/ServicoList'


import ServicoCategoriaForm from './components/servicocategoria/ServicoCategoriaForm'
import ServicoCategoriaList from './components/servicocategoria/ServicoCategoriaList'

import CargoForm from './components/cargo/CargoForm'
import CargoList from './components/cargo/CargoList'

import SetorForm from './components/setor/SetorForm'
import SetorList from './components/setor/SetorList'

import TecnicoForm from './components/tecnico/TecnicoForm'
import TecnicoList from './components/tecnico/TecnicoList'



function App() {

    return (
    
      <Router>
    
      <Navbar />

          <Sidebar />
          <div  className="wrapper" >   </div>
         
          
            <Route exact path="/" component={Home} />
            <Route exact path="/acoes/cadastro" component={AcoesForm} />
            <Route exact path="/acoes/fechamento" component={AcoesFechamentoForm} />
            
                       
            <Route exact path="/modalidades/novo" component={ModalidadeForm} /> 
            <Route exact path="/modalidades" component={ModalidadeList} /> 
            
            <Route exact path="/permissoes/novo" component={PermissoesForm} /> 
            <Route exact path="/permissoes" component={PermissoesList} /> 

            <Route exact path="/usuarios" component={UsuarioList} /> 
            
            
            <Route exact path="/estados/novo" component={EstadoForm} /> 
            <Route exact path="/estados/editar" component={EstadoForm} /> 
            <Route exact path="/estados" component={EstadoList} /> 
            
            <Route exact path="/areastematicas/novo" component={AreaTematicaForm} /> 
            <Route exact path="/areastematicas" component={AreaTematicaList} /> 

            <Route exact path="/bairros" component={BairroList} /> 

            <Route exact path="/cidades" component={CidadeList} /> 
            <Route exact path="/cidades/novo" component={CidadeForm} /> 
            
            <Route exact path="/fonterecursos/novo" component={RecursoForm} />             
            <Route exact path="/fonterecursos" component={FonteRecursoList} /> 

            <Route exact path="/temas/novo" component={TemaForm} /> 
            <Route exact path="/temas" component={TemaList} /> 


            <Route exact path="/meiotransportes" component={MeioTransporteList} /> 
            <Route exact path="/meiotransportes/novo" component={MeioTransporteForm} /> 

                       
            <Route exact path="/servicos" component={ServicoList} /> 
            <Route exact path="/servicos/novo" component={ServicoForm} /> 

            <Route exact path="/categoriaservicos" component={ServicoCategoriaList} /> 
            <Route exact path="/categoriaservicos/novo" component={ServicoCategoriaForm} /> 

            <Route exact path="/orgaos" component={OrgaoList} /> 
            <Route exact path="/orgaos/novo" component={OrgaoForm} /> 

            <Route exact path="/setores" component={SetorList} /> 
            <Route exact path="/setores/novo" component={SetorForm} /> 
        
            
            <Route exact path="/cargos" component={CargoList} /> 
            <Route exact path="/cargos/novo" component={CargoForm} /> 

            <Route exact path="/tecnicos" component={TecnicoList} /> 
            <Route exact path="/tecnicos/novo" component={TecnicoForm} /> 
            
           


    
       
        {/* localStorage.usuariotoken ? adminLink: usuarioLink */}

        {/* localStorage.usuariotoken ?  usuarioLink: adminLink */}
        <Footer /> 
        <SidebarRight />
         <div className="control-sidebar-bg"></div>
             
      </Router>
     
    )
  }


export default App
