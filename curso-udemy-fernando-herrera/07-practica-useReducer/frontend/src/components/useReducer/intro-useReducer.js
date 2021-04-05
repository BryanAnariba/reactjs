// Ejemplo super basico useReducer
const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false    
}];

// Definiendo el reducer
const todoReducer = ( state = initialState, action ) => {

    // usando el action para anexar una tarea
    switch (action?.type) {
        case 'add':
            return [action?.payload, ...state];
        default:
            return state;
    }
};

// Anexar una nueva tarea
const newTodo = {
    id: 2,
    todo: 'Comprar una rivotril',
    done: false
};

// Definiendo acciones para el todoReducer
const todoAction = {
    type: 'add',
    payload: newTodo
};




// --------------------------------------------------------> uso del reducer
let todo = todoReducer(initialState, todoAction);

console.log(todo);



