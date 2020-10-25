// var no se debe usar
// const -> const para valores que tu cress que no cambiaran
// let para valores que si cambiaran durante la ejecucion

// Usando const
const nombre = 'Bryan';
const apellido = 'Sanchez';

// Usando let
let valorDato = 5;
// Cambiando el valor
valorDato = 4;

// Ojo aqui dentro del scope o ambito del if puedo declara otra const nombre
if (true) {
    const nombre = 'peter';
    console.log(nombre);
}

// Este imprime el primer const de nombre
console.log(nombre);