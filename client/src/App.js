import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Detour from './pages/Detour';
import Calculator from './pages/Calculator';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link to="/">Home</Link>
          <Link to="/detour">Detour</Link>
        </header>
        <div>
          <Route exact path="/" component={Calculator} />
          <Route path="/detour" component={Detour} />
        </div>
      </div>
    </Router>
  );
}

export default App;
