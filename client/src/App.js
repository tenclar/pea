import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Profile from './components/Profile'

function App() {
  return (
   /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */


    <Router>
      <div className="App">
        <Navbar />
        <Route exatc path="/" component={Landing} />
          <div className="container">
            <Route exatc path="/cadastro" component={Cadastro} />
            <Route exatc path="/login" component={Login} />
            <Route exatc path="/profile" component={Profile} />        
          </div>
      </div>
    
    </Router>
  );
}

export default App;
