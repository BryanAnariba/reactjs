import React from 'react';
import './App.css';
import Links from './components/links/Link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  return (
    <>
      <Links />
      <ToastContainer/>
    </>
  );
}

export default App;
