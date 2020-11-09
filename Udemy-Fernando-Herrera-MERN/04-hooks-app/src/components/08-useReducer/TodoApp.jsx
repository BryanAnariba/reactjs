import React, {useReducer} from 'react'
import { todoReducer } from './todoReducer';
export const TodoApp = () => {
    const initialState = {
        id: new Date().getTime(),
        description: 'Aprender react',
        done: false
    };


    const [todos] = useReducer(todoReducer, initialState);

    // Imprimiendo reducer
    console.log(todos);
    return (
        <>
            <h2>Todo App using useReducer</h2>
            <ul>
                <li>Hola</li>
                <li>A</li>
                <li>Todos</li>
            </ul>
            <hr/>
        </>
    )
}
