import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/Button';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate()
    const handleButton = () =>{
        navigate('/')
    }

    const handleBackButton =() =>{
        navigate(-1)
    }
    return (
        <div className='error py-5'>
            <h1>404</h1>
            <h3>The page you are looking for is not found</h3>
            {/* <Button>{Button('Go Home')}</Button> */}
            <button className='error-button' onClick={handleButton}>Back to Home</button>
            <button className='error-button' onClick={handleBackButton}>Back</button>
        </div>
    );
};

export default NotFound;