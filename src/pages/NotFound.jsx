import React from 'react';
import '../styles/404.scss';
import '../styles/normalize.css'
import logoA from '../../assets/img/astronauta.png';

const NotFound = () => {
    return (
        <div className='main-container-404'>
            <div className='container-404'>
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <p>The page you are looking for is not available</p> 
                <a href='/' ><button className='primary-button' href="/" type='button'>Back to home</button></a>
            </div>
            <img src={logoA} alt='logo' className='logoA' />
        </div>
    )
}

export default NotFound;