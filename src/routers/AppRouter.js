import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

/* COMPONENTS */
import { DashboardsRoutes } from './DashboardsRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

/* PAGES */
import LoginPage from '../components/login/LoginPage';

const AppRouter = () => {

    const { user: { logged } } = useContext(AuthContext);

    return (
        <Router>
            <div>

                <Switch>
                    
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginPage } 
                        isAuth={ logged }
                    />
                    
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardsRoutes } 
                        isAuth={ logged }
                    />
        
                </Switch>
            </div>
        </Router>
    );

}

export default AppRouter;