import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

/* COMPONENTS */
import { DashboardsRoutes } from './DashboardsRoutes';

/* PAGES */
import LoginPage from '../components/login/LoginPage';

const AppRouter = () => {

    return (
        <Router>
            <div>

                <Switch>
        
                    <Route exact path="/login" component={ LoginPage } />
                    
                    <Route path="/" component={ DashboardsRoutes } />
        
                </Switch>
            </div>
        </Router>
    );

}

export default AppRouter;