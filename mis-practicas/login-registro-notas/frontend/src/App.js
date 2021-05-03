import 'bootstrap/dist/css/bootstrap.min.css';

import { Router } from 'react-router-dom';
import history from './helpers/history';

function App() {
  return (
    <Router history={ history }>
      <h2>Works</h2>
    </Router>
  );
}

export default App;
