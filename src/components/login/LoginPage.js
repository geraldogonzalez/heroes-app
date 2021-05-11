import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginPage = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Geraldo'
            }
        });

        history.replace(lastPath);

    } 

    return (
        <div className="container mt-2">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    )
}

export default LoginPage;
