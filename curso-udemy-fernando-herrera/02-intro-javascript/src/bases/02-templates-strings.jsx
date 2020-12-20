// Templates string

const nombre = 'Bryan Ariel';
const apellido = 'Sanchez Anariba';
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log('Nombre Completo -> ', nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombreCompleto) }`);