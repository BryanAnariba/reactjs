import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    
    const [ state, setState ] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null
        });
        

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setTimeout(() => {
                if (isMounted.current) {
                    setState({
                        data: data,
                        loading: false,
                        error: null
                    });
                } else {
                    console.log('el estado no se ejecuto')
                }
            }, 4000);
        })
        .catch((error) => {
            setState({
                data: {},
                loading: false,
                error: error
            });
        });
    }, [url]);

    return state;
}