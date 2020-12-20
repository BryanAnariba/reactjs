import { getHeroeById } from './bases/08-importacion-exportacion';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         /*
//             Tarea 
//             1 - importar heroes.js getHeroeById
//             2 - clg de heroes
//         */
//         const heroe =getHeroeById(2);
//         resolve(heroe);
//         reject('No se pudo encontrar el heroe');
//     },2000);
// });

// promesa
// .then((data) => {
//     console.log('Heroe', data);
// })
// .catch((error) => {
//     console.warn(error);
// });

const getHeroeByIdAsyn = (heroeId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            /*
                Tarea 
                1 - importar heroes.js getHeroeById
                2 - clg de heroes
            */
            const heroe =getHeroeById(heroeId);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        },2000);
    });
}
getHeroeByIdAsyn(4)
.then((data) => {
    console.log('heroe -> ', data);
})
.catch((error) => {
    console.warn(error);
});