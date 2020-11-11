import { heroes } from '../data/Heroes';

export const getHeroesById= (id) => {

    // Si no entra en el if que filtre y retonr
    return heroes.find( heroe => heroe.id === id);
}