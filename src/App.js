import React, { Component } from 'react';
import Display from './Display';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Display message="Now we're using props which help us abide by the SRP and Open/Close principle."/>
      </div>
    );
  }
}

export default App;
