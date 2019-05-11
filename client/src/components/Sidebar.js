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
                <small>IAIS</small>
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
                <li className="header">EXPEDIENTE</li>
                <li class="active"><a href="/home"><i class="fa fa-dashboard"></i> <span>Dashboard</span></a></li>

                <li className="treeview">
                <a href="##"><i className="fa fa-files-o"></i> <span>Ações</span>
                    <span className="pull-right-container">
                        <i className="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul className="treeview-menu">
                    <li><a href="##">Nova Ação</a></li>
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
                        <li><a href="##">Modalidades</a></li>
                        <li><a href="##">Meio de Transportes</a></li>
                        <li><a href="##">Cidades</a></li>
                        <li><Link to="/bairros/novo" >Bairros </Link></li>
                        <li><Link to="/estados/novo" >Estados </Link></li>
                        <li><a href="##">Endereços</a></li>
                        <li><a href="##">Orgãos</a></li>
                        <li><a href="##">Temas</a></li>
                        <li><a href="##">Área Temáticas</a></li>
                        <li><a href="##">Serv. Sócio Assistenciais</a></li>
                    </ul>
                </li>
            </ul>
            
            </section>
           
            </aside>


         )

    }

}


export default withRouter(Sidebar)