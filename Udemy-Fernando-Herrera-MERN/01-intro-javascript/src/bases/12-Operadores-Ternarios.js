const activo = false;
// Forma uno
let mensaje =  activo ? 'Activo' : 'Inactivo' ;

// Forma dos
const mensaje2 = activo && 'Activo';

console.log(mensaje);
console.log(mensaje2);