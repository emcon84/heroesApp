import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {

    const handlelogin = () => {
        navigate('/marvel', {
            replace: true
        });
    }

    const navigate = useNavigate(); 

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />
            
            <button 
                className="btn btn-primary"
                onClick={ handlelogin }
            >
                Login
            </button>

        </div>
    )
}
