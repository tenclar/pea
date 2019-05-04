import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usuariotoken')
        this.props.history.push('/')
    }

    render(){

        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/cadastro" className="nav-link">
                        Cadastro
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
                    <button type="button"  style={{"background": "none" ,"border": "none"}} onClick={this.logOut.bind(this)}  className="nav-link">
                        LogOut
                    </button>
                </li>
            </ul>
        )
        
        return (
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
            </nav>
        )

    }
    
}


export default withRouter(Navbar)