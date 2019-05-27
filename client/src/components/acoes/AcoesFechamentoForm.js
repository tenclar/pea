import React, {Component} from 'react'
//import {regionalNovo} from './RegionalApi'

class AcoesFechamentoForm extends Component {
   

    render(){
        return(
            <div>

            
      
                <div className="hold-transition skin-blue sidebar-mini" >
                    <div className="wrapper">
                        {/* Content Wrapper. Contains page content */}
                        <div className="content-wrapper">
                            {/*Content Header (Page header)*/ }
                            <section className="content-header">
                                <h1>
                                Acompanhamento de Ações <br />
                                <small>Formulário de Fechamento</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                                <li><a href="/acoes">Ações</a></li>
                                <li className="active">Fechamento</li>
                                </ol>
                                
                            </section>
                            <hr />
                                { /*Main content */}
                            <section className="content container" >

                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Preenchimento da Conclusão de Ações</h3>
                                    </div>
                                
                            
                                    <form noValidate  >
                                        <div className="box-body">
                                          
                                            <div className="row">
                                                
                                                <div className="col-xs-3">
                                                    <div className="form-group">
                                                        <label htmlFor="data_f">Data </label>
                                                        <input type="date"
                                                            data-inputmask="'alias': 'dd/mm/yyyy'" 
                                                            data-mask=""
                                                            className="form-control input-lg"                      
                                                            placeholder="Informe a data"
                                                            id="data_f"   />   
                                                            
                                                           
                                                        
                                                    </div>
                                                </div>
                                                
                
                                                <div className="col-xs-3">
                                                <div className="form-group">
                                                    <label htmlFor="agenda">Agenda</label>
                                                    <select 
                                                    className="form-control input-lg select-lg"                     
                                                    placeholder="Selecione"
                                                    id="agenda"
                                                    name="agenda" > 
                                                    <option  > Realizado </option>  
                                                    <option  > Não Realizado </option> 
                                                    <option  > Ralizado em Parte </option> 
                                                   
                                                    </select>                                                           
                                                </div>                                
                                            </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="atividadenaorealizada">justificativa Atividade</label>
                                                <textarea
                                                     className="form-control input-lg"                      
                                                    placeholder="Escreva  Justificativa"
                                                    id="atividadenaorealizada" 
                                                    name="atividadenaorealizada">
                                                </textarea>
                                             </div>
                                            <div className="row">
                                                <div className="col-xs-6">
                                                    <div className="form-group">
                                                        <label htmlFor="metas">Beneficiários Indiretos - Indivíduos Quantidade / Estimativa </label>
                                                        <input type="text"
                                                            className="form-control input-lg"
                                                            placeholder="Verificar com a equipe !!## forma de cadastro"
                                                            id="bei"
                                                            name="bei"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <div className="form-group">
                                                        <label htmlFor="metas">Beneficiários Indiretos - Famílias Quantidade / Estimativa </label>
                                                        <input type="text"
                                                            className="form-control input-lg"
                                                            placeholder="Verificar com a equipe !!## forma de cadastro"
                                                            id="bei"
                                                            name="bei"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                       
                                           
                                            <div className="box box-success">

                                          
                                                <div className="box-header with-border">
                                                    <h3 className="box-title">Aferição das Metas</h3>
                                                </div>
                                                


                                                {/* <!-- /.box-header --> */}
                                                <div className=" box-body " >
                                                    <table className="table  table-striped table-bordered table-hover text-center">
                                                        <tbody>
                                                        <tr>                                                            
                                                            <th className="text-center"  style={{width: '20px'}}>
                                                                <button title="Adicionar Pessoas à equipe" 
                                                                    type="button"
                                                                    data-toggle="modal" 
                                                                    data-target="#modal-default"
                                                                    className="btn btn-primary">
                                                                    <i className="fa fa-fw fa-asterisk"></i>
                                                                </button>
                                                            </th>
                                                            <th  >Orgão</th>
                                                            <th style={{width: '400px'}}  >Quantidade</th>
                                                          
                                                            
                                                        </tr>
                                                            <tr>
                                                                <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                
                                                                <td>CRAS</td>
                                                                <td>10</td>
                                                             
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>SEMAS</td>
                                                                <td>45</td>
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>CREAS</td>
                                                                <td>10</td>
                                                            </tr>
                                                            
                                                        </tbody></table>
                                                </div>
                                                {/* <!-- /.box-body --> */}
                                               
                                                <div className="box-footer clearfix">
                                                    {/* 
                                                    <ul className="pagination pagination-sm no-margin pull-right">
                                                        <li><a href="#">«</a></li>
                                                        <li><a href="#">1</a></li>
                                                        <li><a href="#">2</a></li>
                                                        <li><a href="#">3</a></li>
                                                        <li><a href="#">»</a></li>
                                                    </ul> */}
                                                </div>
                                                  
                                        

                                                {/* <!-- /.box-success -->  */}
                                            </div> 

                                                         {/* <!-- .box- -->  */}
                                            <div className="box box-primary">

                                          
                                                <div className="box-header with-border">
                                                    <h3 className="box-title">Encaminhamento Sugerido</h3>
                                                </div>
                                                


                                                {/* <!-- /.box-header --> */}
                                                <div className=" box-body " >
                                                    <table className="table table-striped table-bordered table-hover ">
                                                        <tbody>
                                                        <tr>                                                            
                                                            <th className="text-center"  style={{width: '20px'}}>
                                                                <button title="Adicionar Pessoas à equipe" 
                                                                    type="button"
                                                                    data-toggle="modal" 
                                                                    data-target="#modal-modalidade"
                                                                    className="btn btn-primary">
                                                                    <i className="fa fa-fw fa-asterisk"></i>
                                                                </button>
                                                            </th>
                                                            <th >Destino</th>
                                                            <th >Descrição</th>
                                                        
                                                            
                                                        </tr>
                                                            <tr>
                                                                <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Município</td>
                                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                                                
                                                              
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Estado </td>
                                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                                                
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Avaliação</td>
                                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                                                              
                                                            </tr>
                                                            
                                                        </tbody></table>
                                                </div>
                                                {/* <!-- /.box-body --> */}
                                               
                                                <div className="box-footer clearfix">
                                                    
                                                    <ul className="pagination pagination-sm no-margin pull-right">
                                                        <li><a href="#1">«</a></li>
                                                        <li><a href="#1">1</a></li>
                                                        <li><a href="#1">2</a></li>
                                                        <li><a href="#1">3</a></li>
                                                        <li><a href="#1">»</a></li>
                                                    </ul> 
                                                </div>
                                                    {/* <!-- /.box -->  */}
                                            </div>  
                                            



                                                    

                                                          {/* <!-- .box- -->  */}
                                            <div className="box box-primary">

                                          
                                            <div className="box-header with-border">
                                                <h3 className="box-title">Lista de Custos</h3>
                                            </div>
                                            


                                            {/* <!-- /.box-header --> */}
                                            <div className=" box-body " >
                                                <table className="table table-striped table-bordered table-hover ">
                                                    <tbody>
                                                    <tr>                                                            
                                                        <th className="text-center"  style={{width: '20px'}}>
                                                            <button title="Adicionar Pessoas à equipe" 
                                                                type="button"
                                                                data-toggle="modal" 
                                                                data-target="#modal-modalidade"
                                                                className="btn btn-primary">
                                                                <i className="fa fa-fw fa-asterisk"></i>
                                                            </button>
                                                        </th>
                                                        
                                                        <th >Discriminação</th>
                                                        <th >Fonte de Recurso</th>
                                                        <th >Valor</th>
                                                        <th >Obs.</th>
                                                    
                                                        
                                                    </tr>
                                                        <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                            <td>Diárias</td>
                                                            <td>Fonte  100</td>
                                                            <td>R$ 2.500,00</td>
                                                            <td>nono</td>

                                                            
                                                          
                                                        </tr>
                                                        <tr>
                                                        <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                            <td>Combustível</td>
                                                            <td>Fonte  200</td>
                                                            <td>R$ 1.500,00</td>
                                                            <td>nono</td>
                                                            
                                                        </tr>
                                                        <tr>
                                                        <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                            <td>Banner</td>
                                                            <td>fonte 500</td>                                                        
                                                            <td>R$ 5000,00</td>
                                                            <td>nono</td>
                                                          
                                                        </tr>
                                                        
                                                    </tbody></table>
                                            </div>
                                            {/* <!-- /.box-body --> */}
                                           
                                            <div className="box-footer clearfix">
                                                
                                                <ul className="pagination pagination-sm no-margin pull-right">
                                                    <li><a href="##">«</a></li>
                                                    <li><a href="##">1</a></li>
                                                    <li><a href="##">2</a></li>
                                                    <li><a href="##">3</a></li>
                                                    <li><a href="##">»</a></li>
                                                </ul> 
                                            </div>
                                                {/* <!-- /.box -->  */}
                                        </div> 
                                        
                                        </div>

                                        <div className="box-footer">
                                            <button type="submit" className="btn btn-primary">Salvar</button>
                                            <a href="/acoes"  className="btn btn-danger">Cancelar</a>
                                        </div>
                                    </form>
                                </div>

                            {  
                            /* <!--------------------------
                                | Your Page Content Here |
                                --------------------------> */
                            }
                                



                            </section>
                        {/* <!-- /.content --> */}




                        </div>
                        {/*  <!-- /.content-wrapper --> */}
                    </div>
                </div>
                
                                
                                {/*  <!-- modal Colaborador --> */}    
                            <div className="modal fade" id="modal-default"  style={{zIndex: '9999'}} >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title">Incluir Colaborador</h4>
                                    </div>
                                    <div className="modal-body">
                                       
                                        <div className="box box-success">                                          
                                                <div className="box-header with-border">
                                                   


                                                    <div className="row">
                                                    <div className="col-xs-10">
                                                        <div className="form-group">
                                                            
                                                            <input type="text" 
                                                            className="form-control input-lg select-lg"                     
                                                            placeholder="escreva o nome do colaborador"
                                                            id="cidade_realizacao_id"
                                                            name="cidade_realizacao_id" > 
                                                           
                                                            </input>                                                           
                                                        </div>                                
                                                    </div>
                                                    <div className="col-xs-2">
                                                    
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn-lg btn-primary"><i className="fa fa-fw fa-search"></i> </button> 
                                                        </div> 
                                                    </div>
                                                </div>
                                                
                                                </div>                                                
                                            <div className=" box-body " >
                                                <div className="row" >
                                                    <div className="col-xs-12">
                                                        <table className="table table-striped table-hover table-click table-bordered">
                                                        <thead>
                                                            <tr>
                                                            <th className="text-center"  style={{width: '10px'}}>#</th>
                                                            <th  className="text-center" style={{width: '150px'}}>Matrícula</th>
                                                                <th>Nome</th>
                                                                <th>Órgão</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><input type="radio" name="optionsRadios" data-dismiss="modal"  /></td>
                                                                <td>323423242-1</td>
                                                                <td>Tenclar</td>
                                                                <td>IAIS</td>
                                                            </tr>
                                                        </tbody>                                                    
                                                        </table>                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Adicionair</button>
                                    </div>
                                </div>                
                            </div>
                        </div>                                   
                                {/*  <!-- ./modal Colaborador --> */}   



                                   
                                {/*  <!-- modal Modalidade --> */}    
                            <div className="modal fade" id="modal-modalidade"  style={{zIndex: '9999'}} >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title">Incluir Modalidade</h4>
                                    </div>
                                    <div className="modal-body">
                                       
                                        <div className="box box-success">                                          
                                                <div className="box-header with-border">
                                                    <h3 className="box-title">#</h3>


                                                    <div className="row">
                                                    <div className="col-xs-10">
                                                        <div className="form-group">
                                                            
                                                            <input type="text" 
                                                            className="form-control input-lg select-lg"                     
                                                            placeholder="escreva o nome do colaborador"
                                                            id="cidade_realizacao_id"
                                                            name="cidade_realizacao_id" > 
                                                           
                                                            </input>                                                           
                                                        </div>                                
                                                    </div>
                                                    <div className="col-xs-2">
                                                    
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn-lg btn-primary"><i className="fa fa-fw fa-search"></i> </button> 
                                                        </div> 
                                                    </div>
                                                </div>




                                                </div>                                                
                                            <div className=" box-body " >
                                                <div className="row" >
                                                    <div className="col-xs-12">
                                                        <table className="table table-striped table-hover table-click table-bordered">
                                                        <thead>
                                                            <tr>
                                                            <th className="text-center"  style={{width: '20px'}}>#</th>
                                                            
                                                                <th>Modalidade</th>
                                                                <th>Descrição</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><input type="radio" name="optionsRadios" data-dismiss="modal"  /></td>
                                                                <td>Apoio Técnico</td>
                                                                <td>Auxilia ou reforça suporte</td>
                                                            </tr>
                                                            <tr>
                                                                <td><input type="radio" name="optionsRadios" data-dismiss="modal"  /></td>
                                                                <td>Capacitação </td>
                                                                <td>Munir de conhecimentos e possibilidades de criação, solucionar problemas, sugestões que apresentam alternativas</td>
                                                             
                                                            </tr>
                                                        </tbody>                                                    
                                                        </table>                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-default pull-left" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Adicionair</button>
                                    </div>
                                </div>                
                            </div>
                        </div>                                   
                                {/*  <!-- ./modal Modalidade --> */}   



               
            </div>
        
        )
    }
}

export default AcoesFechamentoForm