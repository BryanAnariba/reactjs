import React from 'react'

export const TodoListItem = ({ tarea, i, handleComplete, handleDelete }) => {
    return (
        <>
            <li className={`${ tarea.done ? 'list-group-item complete' : 'list-group-item' }`}>
                { i + 1 } - 
                { tarea.id } - 
                { tarea.description } - 
                { JSON.stringify(tarea.done) }

                <button 
                    className="btn btn-info mr-2"
                    onClick={ () => handleComplete(tarea.id) }>
                    Completar Tarea
                </button>
                <button 
                    className="btn btn-danger"
                    onClick={ () => handleDelete(tarea.id) }>
                    Eliminar Tarea
                </button>
            </li>
        </>
    )
}
