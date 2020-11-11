import { heroes } from '../data/Heroes';

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['DC Comics','Marvel Comics'];

    // Si no encuentra publishers acordes a DC Comics o Marvel Comics que mande error
    if (!validPublishers.includes(publisher)) {
        throw new Error('Publisher', publisher, ' no es correcto');
    }

    // Si no entra en el if que filtre y retonr
    return heroes.filter( heroe => heroe.publisher === publisher);
}