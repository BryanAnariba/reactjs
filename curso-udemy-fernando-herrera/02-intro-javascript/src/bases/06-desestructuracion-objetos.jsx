const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iron Man'
};
const { nombre, edad, clave } = persona;
console.log(nombre + ' , ' + edad + ' , ' + clave);
console.log('-------------------------------------');

const usecontext = ({ nombre, edad, clave }) => {
    // console.log(nombre + ' , ' + edad + ' , ' + clave);
    return {
        nombreClave: clave,
        anios: edad,
        direccion: {
            lat: 12,
            lng: 15
        }
    }
}

const avenger = usecontext(persona);
const { nombreClave , anios, direccion } = avenger
const  { lat, lng } = direccion;

console.log(nombreClave, anios, lat, lng);