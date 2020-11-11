import { useEffect, useState, useRef } from "react"

export const UseFetch = (API_URL) => {

    
    // Usando useRef ojo es importante para que no crashe por el delay de la peticion
    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    },[]);





    // State que maneja parametros como 
    // -> data: informacion de la api
    // -> loading: mensaje de cargando hasta que la data caiga
    // -> error: informacion del error en caso de que peticion a la api falle

    const [fetching, setFetching] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {

        // ASI SE RESETEA CADA VEZ QUE BUSCO UN AUTHOR Y CARGA EL LOADING 
        setFetching({
            data: null,
            loading: true,
            error: null
        });            
    
        
        setTimeout(() => {
           fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                if (isMounted.current) {
                    setFetching({
                        loading: false,
                        data: data,
                        error: null
                    });
                } else {
                    console.log('set state no se llamo gracias a useRef')
                }
            }); 
        }, 4000);
    }, [API_URL]);// SE EJECUTE CUANDO LA URL DE LA API CAMBIE


    // retornamos el objeto fetching
    return fetching;
}
