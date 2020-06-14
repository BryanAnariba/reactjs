import React from 'react';
import './App.css';
// Zona de importaciones de componentes instalados por npm
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

// Zona de componentes propios 
import About from './components/about/About';
import Nabvar from './components/nabvar/Nabvar';
import User from './components/users/User';
import Landing from './components/small-landing/Landing';

function App() {
  return (
    <Router>
      <Nabvar/>
      <div>
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route exact path="/about" component={ About } />
          <Route exact path="/users" component={ User } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
