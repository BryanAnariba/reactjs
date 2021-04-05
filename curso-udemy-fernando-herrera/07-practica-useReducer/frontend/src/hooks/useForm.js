import { useState } from "react"

//  Valor por defecto si no vienen nada en los props un objeto {}, caso contrario , { nombre: valor, apellido: valor }
export const useForm = ( initialState = {} ) => {
    const [ values, setValues ] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    const resetForm = () => {
        setValues(initialState);
    } 

    
    // retornar el objeto ya con la informacion del formulario ya cargada
    // retornar la funcion que realiza el llenado de la informacion
    return [ values, handleInputChange, resetForm ];
}