import React, {Component} from 'react'



class EstadoProfile extends Component {
    constructor(){
        super()
        this.state = {
            nome:'',
            sigla:''
        }
    }

    componentDidMount() {
        const estado = {}
        
        this.setState({
            nome: estado.nome,
            sigla: estado.sigla
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
                                <td>Sigla</td>
                                <td>{this.state.sigla}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>                
            </div>
        )
    }
}
export default EstadoProfile