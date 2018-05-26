import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Info from './Info';
import Jobs from './Jobs';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Info/>
      <Jobs/>
      </div> 
    );
  }
}

export default App;
