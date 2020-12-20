const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 525252,
        lat: 14.545,
        lng: 34.556
    },
};

const persona2 = {
    ...persona
};

persona2.nombre = 'Bryan';
persona2.apellido = 'Anariba';

console.log(persona);
console.log(persona2);