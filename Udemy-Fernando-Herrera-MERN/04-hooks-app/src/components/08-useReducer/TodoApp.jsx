import React, {useReducer, useEffect} from 'react'
import { tareasReducer } from './tareasReducer';

import './TodoApp.css';
import { TodoFormAdd } from './TodoFormAdd';
import { TodoList } from './TodoList';

// init en el reducer define el estado inicial en este caso el contenigo en local storage
const init = () => {
    // retorna lo que hay en localstorage, pero si esta vacio retorna un arreglo vacio []
    return JSON.parse(localStorage.getItem('tareas')) || []; 
}

export const TodoApp = () => {

    // Hook reducer, primer parametro la funcion pura tareasReducer, segundo parametro el estado inicial initialState esta vacio
    // el tecero es init que establece un estado inicial por default por ejemplo aqui almacenaria lo que esta en localstorage
    const [tareas, dispatch] = useReducer(tareasReducer, [] , init);

    // Si las tareas cambian que se dispare el useEffect para actualizar la data en localstorage
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    // Imprimiendo reducer
    //console.log(description);

    const handleAddTarea = ( nuevaTarea ) => {
        // Accion tipo guardado
        const action = {
            type: 'add',
            payload: nuevaTarea
        };

        // mandando la accion por medio del distpatch que dispara el tipo de accion en el reducer
        dispatch(action);
    }
    const handleDelete = (idTarea) => {
        console.log("La tarea con el id -> ", idTarea, " fue eliminada");

        const action = {
            type: 'delete',
            payload: idTarea
        };

        dispatch(action);
    }

    const handleComplete = (idTarea) => {
        const action = {
            type: 'isComplete',
            payload: idTarea
        };

        dispatch(action);
    }

    return (
        <>
            <h2>Tareas App usando useReducer</h2>
            <h3>Tareas in stock: ({ tareas.length })</h3>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mx-auto">
                        <TodoList tareas={tareas} handleComplete={handleComplete} handleDelete={handleDelete} />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-header bg-dark text-center text-white">
                                <h2>Ingresar Tarea</h2>
                            </div>
                            <div className="card-body">
                                <TodoFormAdd handleAddTarea={handleAddTarea}/>
                            </div>
                            <div className="card-footer bg-warning">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}
