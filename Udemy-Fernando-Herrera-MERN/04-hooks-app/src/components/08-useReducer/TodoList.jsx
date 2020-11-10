import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ tareas, handleComplete, handleDelete }) => {
    return (
        <>
            {
                tareas.map((tarea, i) => (
                    <ul key={ tarea.id } className="list-group list-group-flush">
                        <TodoListItem tarea={tarea} i={i} handleComplete={handleComplete} handleDelete={handleDelete} />
                    </ul>)
                )
            }
        </>
    )
}
