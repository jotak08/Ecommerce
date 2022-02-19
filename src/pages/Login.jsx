import React from 'react';
import '../styles/principal.css'
import Logo from '../../assets/logos/logo_yard_sale.svg'
import Header from '../components/Header';

const Login = () => {
    return (
        <>
            <Header />
            <div className="login-">
                <div className="form-container">
                    <img className="logo" src={Logo} alt="logo" />
                    <form action="/" className="form">
                        <label htmlFor="password" className="label">
                            Email address
                        </label>
                        <input className="input-password input-email" type="email" id="password" placeholder="example@gmail.com" />
                        <label htmlFor="new-password" className="label">
                            Password
                        </label>
                        <input className="input-password" type="password" id="new-password" placeholder="**********" />
                        <input type="submit" defaultValue="Log in" className="primary-button login-button" />
                        <p className="resend-login">
                            <a href="/">Forgot my password</a>
                        </p>
                    </form>
                    <button className="secondary-button sign-up">
                    Sign Up
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;