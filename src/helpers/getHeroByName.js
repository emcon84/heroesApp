import { heroes } from "../data/heroes"

export const getHeroByName = (name = '') => {

    console.log ('heroesByName called');

    if(name.length === 0) return [];

    name = name.toLowerCase()
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

}