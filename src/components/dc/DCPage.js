import React from 'react';
import { HeroList } from '../heroes/HeroList';

const DCPage = () => {
    return (
        <div>
            <h1>DC Heroes</h1>
            <hr />
            
            <HeroList publisher="DC Comics" />
        </div>
    )
}

export default DCPage;
