import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Products from './components/Products'
import Info from './components/Info'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <ul className="navbar">
          <li>Home</li>
          <li>Products</li>
          <li>Info</li>
        </ul>
        <h1>Farmacias React</h1>
        <div className="components">
          <Home />
          <Products />
          <Info />
        </div>
      </div>
    );
  }
}

export default App;
