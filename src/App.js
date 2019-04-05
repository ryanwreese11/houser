import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import House from './components/House/House'
import Wizard from './components/Wizard/Wizard'

import routes from './routes'

import { HashRouter as Router } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
  }

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
