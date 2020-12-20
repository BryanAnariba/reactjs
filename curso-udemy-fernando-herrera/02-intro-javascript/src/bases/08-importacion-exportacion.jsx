import { heroes } from '../data/heroes';

export const getHeroeById = (heroeId) => {
    return heroes.find((heroe) => {
        if (heroe.id === heroeId) {
            return true;
        } else {
            return false;
        }
    });
}

export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => {
        if (heroe.owner === owner) {
            return true;
        } else {
            return false;
        }
    });
}
// console.log('Heroe con id 2 -> ', getHeroeById(2));
// console.log('Heroe con id 3 -> ', getHeroeById(3));
// console.log('Heroe con owner DC -> ', getHeroesByOwner('DC'));
// console.log('Heroe con owner Marvel -> ', getHeroesByOwner('Marvel'));
