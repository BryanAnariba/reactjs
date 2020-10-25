import { useState , useEffect } from 'react';
import { getGifs } from '../helpers/getGifts';

// LO QUE HARA ESTE CUSTON HOOK ES MIENTRAS SE OBTIENE LA DATA DE LA API
// SE PONE EN Loading.. y una vez la data ya viene de la data quita el loading
// Pinta los datos
// USAR EN GIFTGRID
export const useFetchGif = (category) => {
    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
        .then((imgs) => {// cuando tenga exito
            setState({ 
                data: imgs, // mando la data
                loading: false // quito el loading
            })
        })
        .catch((err) => {
            console.log(err);
        })
    },[category]); //en el useEffect los [] indican que no se renderizara lo que este adentro del useEffet ,solo lo hara una vez al cargar el componente
    // si la categoria cambia se volvera a ejecutar el useEffect
    return state;
}
