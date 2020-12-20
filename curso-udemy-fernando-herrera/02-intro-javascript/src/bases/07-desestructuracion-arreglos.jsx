const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ ps1, ps2, ps3 ] = personajes;

console.log(ps1);
console.log(ps2);
console.log(ps3);
console.log('-----------');
const retornaArreglo = () => {
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo();
console.log(letras);
console.log(numeros);
console.log('-----------');

// tarea
// desestructurar
// 1 parametro se llamara nombre
// 2 parametro se llamara setNombre
const usestate = (valor) => {
    return [valor, () => {
        console.log('Hello World');
    }];
}

const arr = usestate('Goku');
const [ nombre , setNombre ] = arr;
console.log(nombre);
setNombre();