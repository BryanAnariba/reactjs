import { useState } from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

function App() {

  const [ user, setUser ] = useState({});

  /* 
    Este valor viaja al por el context, 
    puede ser x info necesaria tambien y 
    si quiero acceder a ella en otro componente solo necesito importara el context en dicho componente

    ej 

    const userContext = useContext(UserContext); // useContext(TIPO_CONTEXTO);
    console.log(userContext);

  */

  return (
    <UserContext.Provider value={
      {
        user: user,
        setUser: setUser
      }
    }>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
