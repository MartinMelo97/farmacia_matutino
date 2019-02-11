import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Products from './components/Products'
import Info from './components/Info'
import Patients from './components/Patients'
import Header from './components/Header'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/patients" component={Patients} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
