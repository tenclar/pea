import React, {Component} from 'react'

class Footer extends Component {
    render(){
        return(
            <div>

                {    /*  <!-- Main Footer --> */}
                <footer className="main-footer">
                    {/* <!-- To the right --> */}
                    <div className="pull-right hidden-xs">
                        DINFO<i className="fa fa-fw fa-desktop"></i>
                    </div>
                     {/*   <!-- Default to the left --> */}
                    <strong>Copyright &copy; 2019 <a href="##">IAIS - Instituto de Ação e Inclusão Social</a>.</strong> All rights reserved.
                </footer>
            </div>



        )
    }
}


export default Footer