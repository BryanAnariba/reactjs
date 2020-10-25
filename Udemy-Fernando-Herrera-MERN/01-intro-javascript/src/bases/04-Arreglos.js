// Arreglos JS -> coleccion de informacion o de objetos dentro de una variable

//const arreglo = new Array();// arreglo es igual a []
const users = [1,2,3,4];
const users2 = [
    ...users,// operador spreed para meter los valores del arreglo anterior
    5// adjuntamos el nuevo valor
];

// Map prototype
const users3 = users2.map((number) => {
    return number*10
});

console.log(users2);
console.log(users3);
