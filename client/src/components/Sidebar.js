import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Sidebar extends Component {

    render(){

    return (
        <aside className="main-sidebar ">
            <section className="sidebar">
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="/img/brasao.png" className="img-circle" alt="Brasao " />
                </div>
                <div className="pull-left info">
                <p>Estado do Acre</p>
                <small> .: SEASDHM  :.</small>
                </div>
            </div>

            {/*
            <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                    </button>
                    </span>
                </div>
            </form>
            */}
            <ul className="sidebar-menu" data-widget="tree">
                
                <li ><Link to="/"><i className="fa fa-dashboard"></i> <span className="font-weight-bold">Painel Principal</span></Link></li>
            </ul>
        
            <ul className="sidebar-menu" data-widget="tree">
                <li className="header">EXPEDIENTE</li>              

                <li className="treeview">
                <a href="##"><i className="fa fa-files-o"></i> <span>Ações</span>
                    <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul className="treeview-menu">
                    <li><a href="/acoes/cadastro" >Nova Ação</a></li>
                    <li><a href="/acoes/fechamento" >Fechamento da Ação</a></li>
                    <li><a href="##">Lista de Ações</a></li>
                </ul>
                </li>
            </ul>
            
            <ul className="sidebar-menu" data-widget="tree">
                <li className="header">CONSULTAS</li>
                <li className="treeview">
                    <a href="##"><i className="fa fa-pie-chart"></i> <span>Relatórios</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li><a href="##">relatório 1</a></li>
                        <li><a href="##">realtorio 2</a></li>                        
                    </ul>
                </li>
            </ul>
            <ul className="sidebar-menu" data-widget="tree">
                <li className="header">LISTAS</li>
                <li className="treeview">
                    <a href="##"><i className="fa fa-table"></i> <span>Complementares</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li><a href="/fonterecursos" >Fonte de Recurso</a></li>
                        <li><a href="/modalidades" >Modalidades</a></li>
                        <li><a href="/meiotransportes" >Meio de Transportes</a></li>                      
                        <li><a href="/orgaos" >Orgãos</a></li>
                        <li><a href="/setores" >Setores</a></li>
                        <li><a href="/cargos" >Cargos</a></li>
                        <li><a href="/tecnicos" >Técnicos</a></li>
                        <li><a href="/temas" >Temas</a></li>
                        <li><a href="/areastematicas" >Áreas Temáticas</a></li>
                        <li><a href="/servicos" >Serv. Sócio Assistenciais</a></li>
                        <li><a href="/categoriaservicos" >Categoria de Serviços</a></li>
                        <li><a href="/estados" >Estados </a></li>
                        <li><a href="/cidades" >Cidades</a></li>
                        <li><a href="/bairros" >Bairros </a></li>                       
                        <li><a href="/enderecos" >Endereços</a></li>
                        
                    </ul>
                </li>
            </ul>
            
            </section>
           
            </aside>


         )

    }

}


export default withRouter(Sidebar)