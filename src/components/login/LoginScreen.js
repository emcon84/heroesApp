import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

    const { dispatch } = useContext(AuthContext)
    
    const handlelogin = () => {       

        const action = {
            type: types.login,
            payload: {name: 'Emiliano'}
        }

        dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/marvel';

        navigate( lastPath, {
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
