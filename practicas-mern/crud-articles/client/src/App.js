import React from 'react';

// Importando enrutadores
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

// Importando componentes creados
import About from './components/About';
import Landing from './components/Landing';
import Article from './components/ListArticles';
import Navbar from './components/Navbar';
import Create from './components/CreateArticle';
import Edit from './components/EditArticle';

// Importanto toast para el control de notificaciones
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <div>
        <Switch>
          <Route path="/" exact component={ Landing } />  
          <Route path="/about" component={ About } />
          <Route path='/create-article' component={ Create } />
          <Route path="/list-articles" component={ Article } />
          <Route path='/edit-article' component={ Edit } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
