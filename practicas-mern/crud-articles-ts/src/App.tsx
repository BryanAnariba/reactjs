import React , { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Nabvar from './components/Nabvar';
import Landing from './components/LandingPage';
import CreateUser from './components/CreateUser';
import ListUsers from './components/ListUsers';

function App(): JSX.Element {
  return (
    <Router>
      <Nabvar />
      <Fragment>
        <Switch>
          <Route path="/" exact component={ Landing } />
          <Route path="/create-user" component={ CreateUser } />
          <Route path="/list-users" component={ ListUsers } />
          <Route path="/about-us" component={ AboutUs } />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
