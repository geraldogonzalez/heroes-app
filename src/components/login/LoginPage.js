import React from 'react';

const LoginPage = ({ history }) => {
    
    const handleLogin = () => {

        history.replace('/');

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
