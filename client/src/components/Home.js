import React, {Component} from 'react'

class Home extends Component {
    render(){
        return(
          
             
            <div className="content-wrapper"   >  
            {/* Content Wrapper. Contains page content */}
            {/*Content Header (Page header)*/ }
            <section className="content-header">
                <h1>
                Principal
                <small>Informações Gerais</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="##"><i className="fa fa-dashboard"></i> Painel Principal </a></li>                
                </ol>
            </section>

                { /*Main content */}
            <section className="content container-fluid" >

                {  /* <!--------------------------
                | Your Page Content Here |
                --------------------------> */}
                <div>
                    <table className="table table-bordered table-striped text-center ">
                        <thead>
                        <tr>
                            <th>  texto
                            </th>  
                            </tr>  
                        </thead>
                        <tbody>
                            <tr>
                                <td>dado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>



              
            </section>
            {/* <!-- /.content --> */}
            </div>
         
                  

       

          
        )
    }
}

export default Home