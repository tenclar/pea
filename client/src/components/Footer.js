import React, {Component} from 'react'

class Footer extends Component {
    render(){
        return(
            
             
                <footer className="main-footer"  > {    /*  <!-- Main Footer --> */}
                    <div className="pull-right hidden-xs">{/* <!-- To the right --> */}
                        DINFO <i className="fa fa-fw fa-desktop"></i>
                    </div>
                     {/*   <!-- Default to the left --> */}
                    <strong>Copyright &copy; 2019 <span className="text-primary" >Secretaria de Estado de Assistência Social, dos Direitos Humanos e de Políticas para as Mulheres</span>  </strong>SEASDHM
                </footer>
            
 
        )
    }
}


export default Footer