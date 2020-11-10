import { createContext } from 'react';

/*
    Aqui creamos el context para manejar el state

    Debe ser en un nivel superior: en este caso
    La etiqueta Switch es quien contiene las demas
    por ende podria considerarse el padre de todos los emas
    componentes.
*/

// esto crea un context, lo almacenamos en una variable
export const UserContext = createContext(null);
