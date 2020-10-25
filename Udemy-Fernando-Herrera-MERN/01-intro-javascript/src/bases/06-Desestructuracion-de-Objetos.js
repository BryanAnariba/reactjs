// Desestructuracion -> 
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man'
};

// Impresion de campos normal
console.error('IMPRESION NORMAL');
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

// Impresion de campos desestructurada
console.error('IMPRESION DESESTRUCTURANTE');
const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

const useContext = ({ nombre, edad }) => {
    return {
        name: nombre,
        age: edad,
        direccion: {
            latitud: 20,
            longitud: -40
        }
    }
}

const { name, age, direccion:{ latitud , longitud }}  = useContext(persona);
console.log(
    'informacion desestructurada -> ' , {
        name: name,
        age: age,
        latitud: latitud,
        longitud: longitud
    }
);