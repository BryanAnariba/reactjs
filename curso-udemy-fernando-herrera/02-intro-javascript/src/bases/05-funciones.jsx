const saludar = function (nombre) {
    return `Hola ${ nombre }`;
}

const saludar2 = (nombre) => {
    return `Hola ${ nombre }`;
}

console.log(saludar('Bryan'));
console.log(saludar2('Ariel'));

const getUser = () => (
    {
        uid: 'abc123',
        username: 'Goku'
    }
)

console.log(getUser());

// tarea
// 1 transformar a funcion flecha
// 2 tiene que retornar un objeto implicito
// 3 - prueba
const getUsuarioActivo = (nombre) => (
    {
        uid: 'asc',
        username: nombre
    }
)

console.log(getUsuarioActivo('Vegeta'));