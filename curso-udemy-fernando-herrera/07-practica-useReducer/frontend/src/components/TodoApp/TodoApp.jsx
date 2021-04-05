import React, { useEffect, useReducer } from 'react'
import './todo-app.css';

import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

export const TodoApp = () => {

    // Agarrando valores del formulario
    const [ formValues, handleInputChange, resetForm ] = useForm({
        id: new Date().getTime(),
        description: '',
        done: false
    });

    //console.log(formValues);

    const { description } = formValues;

    //useReducer(funcion reducer , estadoInicial, init en caso de que se tenga que procesar el estado inicial, si no esta definido)
    // dispatch => sirve para disparar las acciones al reducer, asi react se entera de cambio y pinta en pantalla el nuevo estado

    

    const addHomework = (e) => {
        e.preventDefault();
        
        console.log(formValues);

        const action = {
            type: 'add',
            payload: formValues
        };

        if (description.trim().length <= 1) {
            return;
        } else {
            // Mandando la accion, de tipo add o agregar nueva tarea mediante el dispatch
            dispatch( action );
            resetForm();
        }
    }

    const deleteHomework = ( todoId ) => {
        console.log(todoId);
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    // Definiendo estado inicial
    const init = () => {
        // return [
        //     {
        //         id: new Date().getTime(),
        //         description: 'Learn React',
        //         done: false
        //     }
        // ]

        // si el localstorage da null, entonces manda el array vacio []
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    // init rellena el segundo parametro osea rellena el []
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    const todoComplete = ( todoId ) => {
        const action = {
            type: 'complete',
            payload: todoId
        };

        dispatch( action );
    }

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos] );// si los todos cambian se guardara en el local storage
    return (
        <div>
            <h2>Todo App Works: { ( todos.length ) }</h2>
            <hr/>
            
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <table className="table table-bordered table-hover" >
                            <thead className="table-dark">
                                <tr>
                                    <td>My Homeworks</td>
                                    <td>Options</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    todos.map(( todo, i ) => {
                                        return (
                                                <tr
                                                key={ todo.id }>
                                                    <td 
                                                        className={ `${ todo.done ? 'complete text-center' : 'text-center' }` }
                                                        onClick = { () => todoComplete(todo.id) } >
                                                        { i + 1 } - { todo.description }
                                                    </td>
                                                    <td className="text-center">
                                                        <button 
                                                            className="btn btn-outline-danger"
                                                            onClick = { () => deleteHomework(todo.id) }>
                                                            x
                                                        </button>
                                                    </td>
                                                </tr>
                                            
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-header bg-info text-white text-center">
                                <h3>Add Homework</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={ addHomework }>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        name="description"
                                        placeholder="Write a description"
                                        value = { description }
                                        onChange = { handleInputChange }
                                        />
                                        <button 
                                            type="submit"
                                            className="btn btn-outline-primary mt-1 btn-block">
                                            Add Homework
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
