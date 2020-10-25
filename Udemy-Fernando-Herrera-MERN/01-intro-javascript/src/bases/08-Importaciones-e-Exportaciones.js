import heroes from '../data/heroes';

// Funciones communes en arrays

// Obtener todos los heroes
export const getHeroes= () => {
    return heroes;
}

// Obtener un solo herore
// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     }) ;
// }

export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id ? true : false) ;
}

export const getHeoresByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner) ;
}

/*
console.log(getHeroes());
console.log(getHeroeById(2));
console.log(getHeoresByOwner('DC'));
*/