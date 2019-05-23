import React, {Component} from 'react'

class Home extends Component {
    render(){
        return(
                       
             

            <div className="hold-transition skin-blue sidebar-mini" >
            <div className="wrapper">
             {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            {/*Content Header (Page header)*/ }
            <section className="content-header">
                <h1>
                Principal
                <small>Dashboard</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="##"><i className="fa fa-dashboard"></i> Dashboard</a></li>                
                </ol>
            </section>

                { /*Main content */}
            <section className="content container-fluid" >

                {  /* <!--------------------------
                | Your Page Content Here |
                --------------------------> */}
                <div>Principal</div>

              
            </section>
            {/* <!-- /.content --> */}
            </div>
           {/*  <!-- /.content-wrapper --> */}


            </div>
        </div>

          
        )
    }
}

export default Home