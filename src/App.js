import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'


import routes from './routes'

import { HashRouter as Router } from 'react-router-dom'

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Header />
            
          </div>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
