const nombre = 'Bryan';
const apellido = 'Sanchez';

const nombreCompleto = `${ nombre } ${ apellido }`;
console.log(nombreCompleto);


// Usando backtis en funciones e imprimiendo la funcion
const getMessage = (message) => {
    return message;
}
const message = 'desde una funcion';
console.log(`Ejecutando funcion getMessage -> ${ getMessage(message) }`);