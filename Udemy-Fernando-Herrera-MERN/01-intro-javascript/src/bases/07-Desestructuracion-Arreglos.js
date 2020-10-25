const personajes = [
    'Goku',
    'Vegeta',
    'Trunks'
];
console.log('IMPRIMIENTO SIN DESESTRUCTURACION');
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

// Desestructurando arreglos
const [ p1 ] = personajes; 
const [ , p2 ] = personajes;
const [ , , p3 ] = personajes;
console.log('IMPRIMIENTO CON DESESTRUCTURACION');
console.log(p1);
console.log(p2);
console.log(p3);

const retornaArreglo = () => {
    return ['ABC',123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras + '  ' + numeros);

const useState = (valor) => {
    return [ valor , () => {
        console.log('Hola Mundo');
    }];
}

const [ valor , setNombre ] = useState('Bryan');
console.log(valor);
setNombre();