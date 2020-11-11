import { AppRouter } from './routers/AppRouter';
import { useReducer, useEffect } from 'react';


import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

const init = () => {
    // Si retorna true el localstorage significa que hay usuario logueado, caso contrario retorna logged: false
    return JSON.parse(localStorage.getItem('user')) || {
      logged: false
    }
}

function App() {

  // El reducer que queremos redistribuir en el useContext
  // init se lo pasa al initial state en este caso el state seria [user, dispatch]
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
    <AuthContext.Provider value={{user, dispatch}}>
      <AppRouter/>
    </AuthContext.Provider>
  );
}

export default App;
