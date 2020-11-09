// definiendo estado incial 
const initialState = [
    {
        id:1,
        todo: 'comprar leche',
        done: false
    }
];

// Creando reducer-> recibe un estado y accion, siempre retorna el state nuevo
const todoReducer = (state=initialState, action) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    } else {
        return state;
    }
}

// Inicializacion del reducer
let todos = todoReducer();

// Definiendo acciones para guardar un nuevo todo
const newTodo = {
    id:2,
    todo: 'comprar pan',
    done: false
};

const agregarTodoAction = {// Creando la accion para guardar un dato, siempre lleva el type para indicar al reducer que tipo de operacion se va a realizar
    type: 'agregar',
    payload: newTodo
};


todos = todoReducer(todos, agregarTodoAction);
console.log(todos);