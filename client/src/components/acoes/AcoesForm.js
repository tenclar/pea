import React, {Component} from 'react'
//import {regionalNovo} from './RegionalApi'

class AcoesForm extends Component {
   

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
                                <small>Formulário de Cadastro</small>
                                </h1>
                                <ol className="breadcrumb">
                                <li><a href="/"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                                <li><a href="/acoes">Ações</a></li>
                                <li className="active">Cadastro</li>
                                </ol>
                                
                            </section>
                            <hr />
                                { /*Main content */}
                            <section className="content container" >

                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Preenchimento do Cadastro de Ações</h3>
                                    </div>
                                
                            
                                    <form noValidate  >
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label htmlFor="nome">Nome da Atividade</label>
                                                <input type="text"
                                                className="form-control input-lg"                      
                                                placeholder="Descreva a atividade a ser realizada"
                                                id="nome" 
                                                name="nome"
                                               
                                           
                                                />
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-3">
                                                    <div className="form-group">
                                                        <label htmlFor="cidade_realizacao_id">Município de Realização</label>
                                                        <select 
                                                        className="form-control input-lg"                     
                                                        placeholder="Selecione regional"
                                                        id="cidade_realizacao_id"
                                                        name="cidade_realizacao_id" >  
                                                           <option  > Rio Branco </option> 
                                                            <option  > Sena Madureira</option> 
                                                            <option  > Tarauacá </option> 
                                                        </select>
                                                    </div>                                            
                                                </div>
                                                <div className="col-xs-3">
                                                    <div className="form-group">
                                                        <label htmlFor="data_inicio">Período Inicial</label>
                                                        <input type="date"
                                                            className="form-control input-lg"                      
                                                            placeholder="Informe a data"
                                                            id="data_inicio"   />                                                      
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-xs-3">
                                                    <div className="form-group">
                                                        <label htmlFor="data_final">Período Final</label>
                                                        <input type="date"
                                                            className="form-control input-lg"                      
                                                            placeholder="Informe a data"
                                                            id="data_final"   />                                                      
                                                        
                                                    </div>
                                                </div>
                                                <div className="col-xs-3">
                                                <div className="form-group">
                                                    <label htmlFor="cidade_realizacao_id">Meio de Transporte</label>
                                                    <select 
                                                    className="form-control input-lg select-lg"                     
                                                    placeholder="Selecione regional"
                                                    id="cidade_realizacao_id"
                                                    name="cidade_realizacao_id" > 
                                                    <option  > Terrestre </option>  
                                                    <option  > Terrestre-Fluvial </option> 
                                                    <option  > Terrestre-Aéreo </option> 
                                                    <option  > Fluvial </option>                                                     
                                                    <option  > Fluvial-Aéreo </option> 
                                                        <option  > Aéreo</option>                                                                                                             
                                                        <option  > Terrestre-Aéreo-Fluvial </option> 
                                                    </select>                                                           
                                                </div>                                
                                            </div>
                                            </div>



                                            <div className="box box-warning ">
                                                <div className="box-header with-border">
                                                    <h3 className="box-title">Municípios Beneficiados</h3>
                                               
                                                <div className="row">
                                                    <div className="col-xs-4">
                                                        <div className="form-group">
                                                            
                                                            <select 
                                                            className="form-control input-lg select-lg"                     
                                                            placeholder="Selecione regional"
                                                            id="cidade_realizacao_id"
                                                            name="cidade_realizacao_id" > 
                                                            <option  > Cruzeiro do Sul </option>  
                                                            <option  > Rio Branco </option> 
                                                                <option  > Sena Madureira</option> 
                                                                <option  > Tarauacá </option> 
                                                            </select>                                                           
                                                        </div>                                
                                                    </div>
                                                    <div className="col-xs-4">
                                                    
                                                        <div className="form-group">
                                                            <button type="submit" className="btn btn-lg btn-primary">+</button> 
                                                        </div> 
                                                    </div>
                                                </div>
                                                </div>


                                                {/* <!-- /.box-header --> */}
                                                <div className="box-body ">
                                                    <table className="table table-striped table-hover table-bordered">
                                                        <tbody>
                                                        <tr>                                                            
                                                            <th className="text-center" style={{width: '10px'}}>#</th>
                                                            <th >#</th>
                                                            <th>Task</th>
                                                            <th>Progress</th>
                                                            
                                                        </tr>
                                                            <tr>
                                                                <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Rio Branco</td>
                                                                <td>
                                                                    <div className="progress progress-xs">
                                                                        <div className="progress-bar progress-bar-danger" style={{width:" 55%"}}></div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-red">55%</span></td>
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Santa Rosa </td>
                                                                <td>
                                                                    <div className="progress progress-xs">
                                                                        <div className="progress-bar progress-bar-yellow" style={{width: "70%"}}></div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-yellow">70%</span></td>
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Mancio Lima</td>
                                                                <td>
                                                                    <div className="progress progress-xs progress-striped active">
                                                                        <div className="progress-bar progress-bar-primary" style={{width: "30%"}}></div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-light-blue">30%</span></td>
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Cruzeiro do Sul</td>
                                                                <td>
                                                                    <div className="progress progress-xs progress-striped active">
                                                                        <div className="progress-bar progress-bar-success" style={{width: "90%"}}></div>
                                                                    </div>
                                                                </td>
                                                                <td><span className="badge bg-green">90%</span></td>
                                                            </tr>
                                                        </tbody></table>
                                                </div>

                                                {/* <!-- /.box-body --> */}
                                                {
                                                <div className="box-footer clearfix">
                                                  
                                                    <ul className="pagination pagination-sm no-margin pull-right">
                                                        <li><a href="#1">«</a></li>
                                                        <li><a href="#1">1</a></li>
                                                        <li><a href="#1">2</a></li>
                                                        <li><a href="#1">3</a></li>
                                                        <li><a href="#1">»</a></li>
                                                    </ul>
                                                </div>}
                                            </div>

                                           
                                            <div className="box box-success">

                                          
                                                <div className="box-header with-border">
                                                    <h3 className="box-title">Composição da Equipe</h3>
                                                </div>
                                                


                                                {/* <!-- /.box-header --> */}
                                                <div className=" box-body " >
                                                    <table className="table  table-striped table-bordered table-hover text-center">
                                                        <tbody>
                                                        <tr>                                                            
                                                            <th className="text-center"  style={{width: '10px'}}>
                                                                <button title="Adicionar Pessoas à equipe" 
                                                                    type="button"
                                                                    data-toggle="modal" 
                                                                    data-target="#modal-default"
                                                                    className="btn btn-primary">
                                                                    <i className="fa fa-fw fa-asterisk"></i>
                                                                </button>
                                                            </th>
                                                            <th >Colaborador</th>
                                                            <th  style={{width: '200px'}}>Órgão</th>
                                                            <th  style={{width: '200px'}}>Matricula</th>
                                                            <th style={{width: '200px'}}>Celular</th>
                                                            
                                                        </tr>
                                                            <tr>
                                                                <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>José Geraldo</td>
                                                                <td>SEET</td>
                                                                <td> 23423423</td>
                                                                <td> (68)2342-2323</td>
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Albertina Costa </td>
                                                                <td>SGA</td>
                                                                <td>45345-23</td>
                                                                <td>(68)93234-3423</td>
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Mancio Lima</td>
                                                                <td>SEPLAN</td>
                                                                <td>232342-2</td>
                                                                <td>(55)92323-2323</td>
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
                                                    <h3 className="box-title">Modalidade da Ação</h3>
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
                                                            <th >Modalidade</th>
                                                            <th >Descrição</th>
                                                        
                                                            
                                                        </tr>
                                                            <tr>
                                                                <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Apoio Técnico</td>
                                                                <td>Auxilia ou reforça suporte</td>
                                                                
                                                              
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Capacitação </td>
                                                                <td>Munir de conhecimentos e possibilidades de criação, solucionar problemas, sugestões que apresentam alternativas</td>
                                                                
                                                            </tr>
                                                            <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                <td>Monitoramento</td>
                                                                <td>Checar o processo deas atividadess do projeto. U,a observação sistemática com propósitos</td>
                                                              
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
                                            


                                                        <div className="row">
                                                          <div  className="col-xs-6">
                                                          
                                            
                                                         {/* <!-- .box- -->  */}
                                                         <div className="box box-success">

                                          
                                                         <div className="box-header with-border">
                                                             <h3 className="box-title">Lista de Áreas tematicas</h3>
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
                                                                     <th >Área Temática</th>
                                                                     
                                                                 
                                                                     
                                                                 </tr>
                                                                     <tr>
                                                                         <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                         <td>Estrutura, Normas e Funcionamento do SUAS</td>
                                                                         
                                                                         
                                                                       
                                                                     </tr>
                                                                     <tr>
                                                                     <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                         <td>Gestão Financeira e Orçamentária </td>
                                                                         
                                                                         
                                                                     </tr>
                                                                     <tr>
                                                                     <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                         <td>Gestão do Trabalho</td>
                                                                         
                                                                       
                                                                     </tr>
                                                                     
                                                                 </tbody></table>
                                                         </div>
                                                         {/* <!-- /.box-body --> */}
                                                        
                                                         <div className="box-footer clearfix">
                                                             
                                                             <ul className="pagination pagination-sm no-margin pull-right">
                                                                 <li><a href="##">«</a></li>
                                                                 <li><a href="##">1</a></li>
                                                                 <li><a href="#1">2</a></li>
                                                                 <li><a href="#1">3</a></li>
                                                                 <li><a href="#1">»</a></li>
                                                             </ul> 
                                                         </div>
                                                             {/* <!-- /.box -->  */}
                                                     </div>  
                                                     
                                                     </div> {/* col */} 
                                                     <div className="col-xs-6">
                                                                {/* <!-- .box- -->  */}
                                                         <div className="box box-warning">

                                          
                                                         <div className="box-header with-border">
                                                             <h3 className="box-title">Lista de Temas Abordados</h3>
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
                                                                     <th >Tema</th>
                                                                     
                                                                 
                                                                     
                                                                 </tr>
                                                                     <tr>
                                                                         <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                         <td>Adequaão da estrutura organizacional da Secretaria</td>
                                                                        
                                                                         
                                                                         
                                                                       
                                                                     </tr>
                                                                     <tr>
                                                                     <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                         <td>Elaboração do Plano Municipal de Assistência Social </td>
                                                                         
                                                                         
                                                                     </tr>
                                                                     <tr>
                                                                     <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                                         <td>Gestão do Fundo Municipal de Assistência Social</td>
                                                                         
                                                                       
                                                                     </tr>
                                                                     
                                                                 </tbody></table>
                                                         </div>
                                                         {/* <!-- /.box-body --> */}
                                                        
                                                         <div className="box-footer clearfix">
                                                             
                                                             <ul className="pagination pagination-sm no-margin pull-right">
                                                                 <li><a href="3#">«</a></li>
                                                                 <li><a href="3#">1</a></li>
                                                                 <li><a href="3#">2</a></li>
                                                                 <li><a href="3#">3</a></li>
                                                                 <li><a href="3#">»</a></li>
                                                             </ul> 
                                                         </div>
                                                             {/* <!-- /.box -->  */}
                                                     </div>  
                                                     </div>                                                      
                                                     </div>{/* row */}

                                                    

                                                          {/* <!-- .box- -->  */}
                                            <div className="box box-primary">

                                          
                                            <div className="box-header with-border">
                                                <h3 className="box-title">Lista de Serviços Socioassistenciais</h3>
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
                                                        <th >Serviço</th>
                                                        <th >Sub Categoria</th>
                                                    
                                                        
                                                    </tr>
                                                        <tr>
                                                            <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                            <td>PROTEÇÃO SOCIAL BÁSICA</td>
                                                            <td>Convivência e Fortalecimento de Veículos</td>
                                                            
                                                          
                                                        </tr>
                                                        <tr>
                                                        <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                            <td>PROTEÇÃO SOCIAL ESPECIAL DE MEDIA COMPLECIDADE </td>
                                                            <td>Proteção e Atendimento Especializado a Famílias e Indivíduos (PAEFI)</td>
                                                            
                                                        </tr>
                                                        <tr>
                                                        <td className="text-center" ><a href="/acoes/mbexcluir/" className="btn  btn-danger"><i className="fa fa-fw fa-close"></i></a></td>
                                                            <td>BENEFÍCIOS</td>
                                                            <td>Prestação Continuada</td>
                                                          
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
                                        <div className="form-group">
                                            <label htmlFor="justificativa">Justificativa </label>
                                            <textarea
                                                className="form-control input-lg"                      
                                                placeholder="Descreva uma técnica da execução a ser realizada"
                                                id="justificativa" 
                                                name="justificativa"     
                                            ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="localrealizacao">Local de Ralização </label>
                                            <textarea
                                                className="form-control input-lg"                      
                                                placeholder="Descreva o local e endereço de realização"
                                                id="localrealizacao" 
                                                name="localrealizacao"     
                                            ></textarea>
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="publicoalvo"> Público Alvo </label>
                                        <textarea
                                            className="form-control input-lg"                      
                                            placeholder="Descreva o local e endereço de realização"
                                            id="publicoalvo" 
                                            name="publicoalvo"     
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="localrealizacao"> Instituições Envolvidas e Parceiras </label>
                                        <textarea
                                            className="form-control input-lg"                      
                                            placeholder="Descreva o local e endereço de realização"
                                            id="instituicoes" 
                                            name="instituicoes"     
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                    <label htmlFor="metas">Metas Esperadas (Quantitativas) por Município </label>
                                    <input type="text"
                                        className="form-control input-lg"                      
                                        placeholder="Verificar com a equipe !!## forma de cadastro"
                                        id="metas" 
                                        name="metas"     
                                    />
                                    </div>

                                    <div className="form-group">
                                    <label htmlFor="metas">Beneficiários Indiretos - Indivíduos Quantidade / Estimativa </label>
                                    <input type="text"
                                        className="form-control input-lg"                      
                                        placeholder="Verificar com a equipe !!## forma de cadastro"
                                        id="bei" 
                                        name="bei"     
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="metas">Beneficiários Indiretos - Famílias Quantidade / Estimativa </label>
                                    <input type="text"
                                        className="form-control input-lg"                      
                                        placeholder="Verificar com a equipe !!## forma de cadastro"
                                        id="bei" 
                                        name="bei"     
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="metas">Data</label>
                                    <input type="text"
                                        className="form-control input-lg"                      
                                        placeholder="Verificar com equipe ## data do sistema"
                                        id="bei" 
                                        name="bei"     
                                    />
                                    </div>                   
                                        <div className="form-group">
                                        <label htmlFor="hora1">Hora  manha / programação</label>
                                        <textarea
                                            className="form-control input-lg"                      
                                            placeholder="Verificar com a equipe !!## forma de cadastro"
                                            id="hora1" 
                                            name="hora1"     
                                        ></textarea>
                                        </div>
                                    
                                        <div className="form-group">
                                        <label htmlFor="metas"> horario tarde/ programação </label>
                                        <input type="text"
                                            className="form-control input-lg"                      
                                            placeholder="Verificar com a equipe !!## forma de cadastro"
                                            id="bei" 
                                            name="bei"     
                                        />
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

export default AcoesForm