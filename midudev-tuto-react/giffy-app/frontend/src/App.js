import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { GifList } from './components/gifList/GifList';
import { GifDetails } from './components/gif-details/GifDetails';

import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      Gifs
      <section>
        <Router>
          
          <Link to={ '/gifs/colombia' }>Gifs Colombia</Link>
          <br />
          <Link to={ '/gifs/canada' }>Gifs Canada</Link>
          <br />
          <Link to={ '/gifs/alemania' }>Gifs Alemania</Link>
          <br />
          <Link to={ '/gifs/miami' }>Gifs Miami</Link>
          <Switch>
            <Route path="/gifs/:keyword" component={ GifList } exact/>
            <Route path="/gifs/:gifId/details" component={ GifDetails } exact/>
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
