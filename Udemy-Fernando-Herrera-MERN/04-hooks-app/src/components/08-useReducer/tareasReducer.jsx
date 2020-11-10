// state = [], en caso que no venga nada en el state cree un arreglo 
export const tareasReducer = (state = [], action) => {
    switch (action.type) {

        // Si el tipo de accion es agregar
        case 'add':
            return [...state, action.payload];
        
        case 'delete':
            return state.filter(todo => todo.id !== action.payload); // payload aqui seria el id

        case 'isComplete':
            return state.map( tarea => {
                // si los id coinciden que modifique el estado de done a true
                if (tarea.id === action.payload) {
                    return {
                    ...tarea, 
                    done: !tarea.done
                    };
                } else {
                    return tarea;
                }
            } )
        default:
            return state;
    }
}