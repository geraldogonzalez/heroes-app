import React from 'react';
import { HeroList } from '../heroes/HeroList';

const MarvelPage = () => {
    return (
        <div>
            <h1>Marvel Heroes</h1>
            <hr />

            <HeroList publisher="Marvel Comics" />
        </div>
    )
}

export default MarvelPage;