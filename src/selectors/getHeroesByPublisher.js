import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if( !validPublisher.includes( publisher ) ) {
        throw new Error(`El publisher "${ publisher }" no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher );

}
