import { createContext } from 'react';

// Paso 1 -> Creacion del context, dicho context debe situarse en donde pueda englobar todos los demas componentes, en App.js
export const UserContext = createContext(null);