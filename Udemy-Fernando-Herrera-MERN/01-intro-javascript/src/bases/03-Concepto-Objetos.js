
const user = {
    nombre: 'Bryan Ariel',
    apellido: 'Sanchez Anariba',
    edad: 23,
    direccion: {
        ciudad: 'Los Angeles',
        codigoPostal: 801,
        longitud: 12,
        latitud: 12
    }
}
console.log('Imprimiendo Objeto user -> ', user);
console.log('Imprimiento Nombre del Objeto user -> ', { 
    nombre: user.nombre
});

// Haciendo un clon de user con spred o  los ... 
const user2 = { ...user };
user2.nombre = 'maria';

// Imprimiendo normalmente
console.log(user);
console.log(user2);
// Imprimiento dentro una tabla
console.table(user);
console.table(user2);
