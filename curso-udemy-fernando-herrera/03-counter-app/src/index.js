import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp'
//<PrimeraApp saludo="Hola soy bryan" />
import { CounterApp } from './components/CounterApp'
import './index.css';

const root = document.querySelector('#root')

ReactDOM.render(<CounterApp value={ 10 } />,root);