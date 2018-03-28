import React, { Component } from 'react';
import logo from './cat.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello Rinoa</h1>
        </header>
        <p className="App-intro">
          你好,婉转喵!
        </p>
      </div>
    );
  }
}

export default App;
