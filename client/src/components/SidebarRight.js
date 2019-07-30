import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Sidebar extends Component {

    render(){

        return (
            
            
              
                <aside className="control-sidebar control-sidebar-dark">  {/* <!-- Control Sidebar --> */}
                {/* <!-- Create the tabs --> */}
                <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
                    <li ><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
                    <li className="active"><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-wrench"></i></a></li>
                </ul>
                {/* <!-- Tab panes --> */}
                <div className="tab-content">
                    {/* <!-- Home tab content --> */}
                    <div className="tab-pane" id="control-sidebar-home-tab">
                    <h3 className="control-sidebar-heading">Recent Activity</h3>
                    <ul className="control-sidebar-menu">
                        <li>
                        <a href="##">
                            <i className="menu-icon fa fa-birthday-cake bg-red"></i>

                            <div className="menu-info">
                            <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>

                            <p>Will be 23 on April 24th</p>
                            </div>
                        </a>
                        </li>
                    </ul>
                    {/* <!-- /.control-sidebar-menu --> */}

                    <h3 className="control-sidebar-heading">Tasks Progress</h3>
                    <ul className="control-sidebar-menu">
                        <li>
                        <a href="##">
                            <h4 className="control-sidebar-subheading">
                            Custom Template Design
                            <span className="pull-right-container">
                                <span className="label label-danger pull-right">70%</span>
                                </span>
                            </h4>

                            <div className="progress progress-xxs">
                            <div className="progress-bar progress-bar-danger" style={{'width':'70%'}}></div>
                            </div>
                        </a>
                        </li>
                    </ul>
                    {/* <!-- /.control-sidebar-menu --> */}

                    </div>
                    {/* <!-- /.tab-pane --> */}
                    {/* <!-- Stats tab content --> */}
                    <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
                    {/* <!-- /.tab-pane --> */}
                    {/* <!-- Settings tab content --> */}
                    <div className="tab-pane active" id="control-sidebar-settings-tab">

                    <h3 className="control-sidebar-heading">Configurações Gerais</h3>
                   
                    
                        <ul className="control-sidebar-menu"   >
                            <li><a className="control-sidebar-subheading"  href="/usuarios" >Usuários</a></li>
                            <li><a className="control-sidebar-subheading" href="/permissoes" >Permissões</a></li>
                            <li><a className="control-sidebar-subheading" href="/setores">Setores</a></li>
                            <li><a className="control-sidebar-subheading" href="/cargos">Cargos</a></li>
                        </ul>
                    
                        <p>  Some information about this general settings option </p>
                    
                    </div>
                    {/* <!-- /.tab-pane --> */}

                     {/* <!-- /.control-sidebar --> */}
              {/*   <!-- Add the sidebar's background. This div must be placed
                immediately after the control sidebar --> */}
                </div>
               
                </aside>
               
              


            
        )
    }
}

export default withRouter(Sidebar)