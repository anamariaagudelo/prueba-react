import React, { Component } from 'react';
import Router from './components/Router';
import Header from './components/util/Header'



class App extends Component {
  render() {
    return (
      <div className="contenedor">
          <Header></Header>
          <Router></Router>
      </div>
    )
  }
}

export default App;
