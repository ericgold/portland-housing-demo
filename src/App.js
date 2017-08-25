import React, { Component } from 'react';
import './App.css';
import DataCard from './Components/DataCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Portland Housing Demo</h1>
          <h2>Using Hack Oregon's Housing API</h2>
        </div>
        <DataCard />
      </div>
    );
  }
}

export default App;
