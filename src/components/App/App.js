import React, { Component } from 'react';
import Router from '../../screens/Router'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

//redux
import {Provider} from  'react-redux';
import store from '../../redux/store'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div >
        <Router></Router>
      </div>
      </Provider>
    )
  }
}

export default App;
