import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

const HeroesPage = ({ history }) => {

    const { heroeId } = useParams();

    const heroe = useMemo(() => getHeroById(heroeId), [ heroeId ])

    if( !heroe ) {
        return <Redirect to='/' />;
    }

    const handleReturn = () => {

        if( history.length <= 2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = heroe;

    return (
        <div className="row my-2">
            <div className="col-md-4">
                <img 
                    src={ `/assets/heroes/${ heroeId }.jpg` } 
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-md-8 animate__animated animate__fadeIn">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Publisher: </b>{ publisher } </li>
                    <li className="list-group-item"> <b>Alter ego: </b>{ alter_ego } </li>
                    <li className="list-group-item"> <b>First appearance: </b>{ first_appearance } </li>
                </ul>

                <h5>Characters</h5>
                <p> { characters } </p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}

export default HeroesPage;
