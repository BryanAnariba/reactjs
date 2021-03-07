import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (category) => {
    console.log(category);
    const [state, setState] = useState({
        data: [], // aqui van las imagenes
        loading: true
    });

    // Use effect -> permite ejecutar codigo de maner condicional 
    useEffect(() => {
        getGifs(category)
        .then((images) => {
            setState({
                data:images,
                loading: false
            });
        })
        .catch(error => {
            console.log(error);
        });
    }, [ category ]); // Que se ejecute el efecto cuando el input de la categoria cambie

    return state;
}