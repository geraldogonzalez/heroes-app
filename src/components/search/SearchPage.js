import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';

import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

const SearchPage = ({ history }) => {

    const location = useLocation();
    
    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({ heroName: q });
    const { heroName } = formValues;

    const heroesFiltered = useMemo(() => getHeroByName( q ), [ q ]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ heroName }`);
    }

    return (
        <div>
            <h1>Search Page</h1>
            <hr />
            
            <div className="row">

                <div className="col-md-5">

                    <h4 className="mb-3">Introduce your hero name</h4>

                    <form onSubmit={ handleSearch }>

                        <input
                            type="text"
                            name="heroName"
                            placeholder="Hero name here..." 
                            className="form-control"
                            value={ heroName }
                            onChange={ (e) => handleInputChange(e) }
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block mt-2"
                        >
                            Find hero
                        </button>

                    </form>

                </div>
                
                <div className="col-md-7">

                    <h4>Results</h4>
                    <hr />

                    { 
                        ( q === '' ) 
                        && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    { 
                        ( q !== '' && heroesFiltered.length === 0 ) 
                        && 
                        <div className="alert alert-danger">
                            There is not a hero with "{ q }" 
                        </div>
                    }
                    

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default SearchPage;