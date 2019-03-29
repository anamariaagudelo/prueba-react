import React, { Component } from 'react';
import Router from './components/Router';
import RegistertCandidate from './screens/RegisterCandidate'



class App extends Component {
  render() {
    return (
      <div className="container">
        <Router></Router>
        <div >
          <RegistertCandidate />
        </div>
      </div>

    )
  }
}

export default App;
