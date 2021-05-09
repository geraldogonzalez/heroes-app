import { heroes } from '../data/heroes';


export const getHeroByName = ( heroName ) => {

    if( heroName === '' ) {
        return [];
    }

    const name = heroName.toLocaleLowerCase(); 

    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes( `${name}` ) );

}