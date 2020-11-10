import React from 'react'
import { useForm } from '../../hooks/useForm';


export const TodoFormAdd = ({ handleAddTarea }) => {
    // Hook para capturar lo que viene en los inputs
    const [{ description }, handleInputChange, resetForm ] = useForm({
        description: ''
    });

    // Agregar una nueva tarea, llamando a una accion
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length < 1) {
            return;
        }
        
        const nuevaTarea = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        //  Mandando la tarea lista y validada solo para guardarla
        handleAddTarea(nuevaTarea);

        // Limpiar formulario
        resetForm();
    }
    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div className="form-group">    
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Digite la tarea"
                        name="description"
                        onChange={ handleInputChange }
                        value={ description }
                />
                </div>
                <div className="form-group">
                    <input type="submit" value="Guardar tarea" className="btn btn-outline-success btn-block"/>
                </div>
            </form>
        </>
    )
}
