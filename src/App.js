import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alerts from './Alerts'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Alerts></Alerts>
      </div>
    );
  }
}

export default App;
