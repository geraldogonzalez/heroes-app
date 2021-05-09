import React from 'react';
import { 
    Redirect, 
    Route, 
    Switch 
} from 'react-router';

/* COMPONENTS */
import { Navbar } from '../components/ui/Navbar';

/* PAGES */
import DCPage from '../components/dc/DCPage';
import MarvelPage from '../components/marvel/MarvelPage';
import HeroesPage from '../components/heroes/HeroesPage';
import SearchPage from '../components/search/SearchPage';

export const DashboardsRoutes = () => {
    return (
        <>

            <Navbar />

            <div className="container mt-2">
                <Switch>

                    <Route exact path="/marvel" component={ MarvelPage } />
                    <Route exact path="/dc" component={ DCPage } />
                    <Route exact path="/search" component={ SearchPage } />
                    <Route exact path="/hero/:heroeId" component={ HeroesPage } />

                    <Redirect to="/marvel" />
                    
                </Switch>
            </div>

        </>
    );
};
