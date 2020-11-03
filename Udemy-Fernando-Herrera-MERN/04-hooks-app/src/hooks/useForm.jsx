import { useState } from 'react'

// Mandamos un props por defecto con arreglo o objeo vacio en caso de que no se manda nada desde el FormWithCustomHook
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChage = (e) => {
        //console.log(e.target.value);
        setValues({
            ...values,
            [ e.target.name ]: e.target.value
        })
    }

    // retornamos las variable o funciones a utilizar
    return [
        values, 
        handleInputChage
    ];
}
