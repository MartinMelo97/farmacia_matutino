import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Products from './components/Products'
import Info from './components/Info'
import Patients from './components/Patients'
import { Switch, Route, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <ul className="navbar">
         <NavLink to="/" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Home</li>
          </NavLink>
          <NavLink to="/products" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Products</li>
          </NavLink>
          <NavLink to="/info" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Info</li>
          </NavLink>
          <NavLink to="/patients" style={{color: "#fff", textDecoration: "none"}}>
            <li className="linksito">Patients</li>
          </NavLink>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/patients" component={Patients} />
        </Switch>
      </div>
    );
  }
}

export default App;
