import { getHeroeById, getHeoresByOwner } from '../bases/08-Importaciones-e-Exportaciones';


// Tarea 
// Import el getHeroeById() del archivo 08-Importaciones-Exportaciones
// Imprimirla

// Resolve cuando la promesa se ejecuta con exito, reject cuando fracasa la ejecucion
const getHeroe = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(4);
        //console.log(heroe);
        if (heroe) {
            resolve(heroe);
        } else {
            reject('Heroe no encontrado')
        }
    }, 2000);
});


const getHeroeByOwnerAsync = (owner) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = getHeoresByOwner(owner);
            if (data) {
                resolve(data);
            } else {
                reject('Heroe no encontrado')
            }
        }, 2000);
    });
}


// Ejecutando promesas anidadas
getHeroe
.then((res) => {
    console.log(res);
    getHeroeByOwnerAsync('DC')
        .then((res) => {
            console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });
})
.catch((error) => {
    console.log('Ha ocurrido un error en la promesa', error);
});