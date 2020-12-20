// Variables y Constantes
// No usar var

const nombre = 'Bryan';
const apellido = 'Sanchez';

let valorDado = 5;
valorDado = 4;

console.log(nombre);
console.log(apellido);
console.log(valorDado);
console.log('------------------');
// Ejemplo varianles scope o ambito de variablees
if (true) {
    let valorDado = 10;
    console.log(valorDado);
    const nombre = 'Ariel';
    console.log(nombre);
}

console.log(valorDado);