
// Funciones

// Funcion tradiciona;
function saludar (nombre) {
    return `Hola ${ nombre }`;
}

console.log(saludar('Bryan'));

// Arrow function
const message = (message) => {
    return message;
}

console.log(message('Saludos Vecinos'));

// Imprimiendo sin llaves pero un objeto ya que si va sin parentesis tira error
const getUser = () => ({
    id: 1,
    nombre: 'Goku'
});

console.log(getUser());