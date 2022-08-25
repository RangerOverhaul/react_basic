


import React, { Fragment } from 'react'
import './App.css';
import Presentacion from './containers/app';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contenedor from './containers/login';
import Formulario from './containers/formulario';
import Axiosapi from './containers/persons';
import { Provider } from 'react-redux';
import List from './components/list';
import store from "./store";


function App() {
  return (
    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
    */
    <div className="App">
   <React.Fragment>
     <Router>
      <Switch>
      <Route path="/login">
          <Contenedor>

          </Contenedor>
        </Route>
        <Route path="/form">
          <Formulario>

          </Formulario>
        </Route>
        <Route path="/info">
          <Axiosapi></Axiosapi>
        </Route>
        <Route path="/redux">
          <Provider store={store} >
            <List></List>
          </Provider>
        </Route>
        <Route path="/">
          <Presentacion>

          </Presentacion>
        </Route>
      </Switch>
     </Router>
   </React.Fragment>
   </div>
  );
}

export default App;
