import React from 'react';
import '../styles/login.scss';
import logo from '../../assets/logos/logo_yard_sale.svg';
import Header from '../components/Header';

const NewPassword = () => {
    return (
        <>
            <Header />  
            <div className="login-">
                <div className="form-container">
                    <img src={logo} alt='logo' className='logo' />  
                    <h1 className="title">
                        Created new password
                    </h1>
                    <p className="subtitle">
                        Enter a new password for you account
                    </p>
                    <form action="/" className="form">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input className="input-password" type="password" id="password" placeholder="**********"/>
                        <label htmlFor="new-password" className="label">
                            Re-enter password
                        </label>
                        <input className="input-password" type="password" id="new-password" placeholder="**********"/>
                        <input type="submit" value="Confirm" className="primary-button login-button"/>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewPassword;