const activo = false;

// Operador ternario con else
const mensaje = (activo) ? 'Activo' : 'Inactivo';

// Operador ternario sin else
const mensaje2  = activo && 'Activo';

console.log(mensaje);
console.log(mensaje2);