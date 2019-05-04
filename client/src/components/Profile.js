import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'


class Profile extends Component {
    constructor(){
        super()
        this.state = {
            nome:'',
            email:''
        }
    }

    componentDidMount() {
        const token = localStorage.usuariotoken
        const decoded = jwt_decode(token)
        this.setState({
            nome: decoded.nome,
            email: decoded.email
        })
    }

    render() {
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>Nome</td>
                                <td>{this.state.nome}</td>
                            </tr>
                            <tr>
                                <td>e-mail</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>                
            </div>
        )
    }
}
export default Profile