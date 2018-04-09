import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inputlike from './components/inputlike';
import Outputlike from './components/outputlike'; 
class App extends Component {
  render() {
    return (
      <div className="App">
 <h2> FIRST EXAMPLE</h2>
 <Inputlike/>
 <Outputlike/>        
      </div>
    );
  }
}

export default App;
 