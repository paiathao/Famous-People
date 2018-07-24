import React, { Component } from 'react';
import Header from '../Header/Header';
import Star from '../Star/Star'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
        </p>
        <Star/>
      </div>
    );
  }
}

export default App;
