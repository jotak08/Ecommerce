import React, { useRef } from 'react';
import '../styles/principal.css'
import Logo from '../../assets/logos/logo_yard_sale.svg'
import Header from '../components/Header';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('new-password')
        }
        console.log(data);
    }

    return (
        <>
            <Header />
            <div className="login-">
                <div className="form-container">
                    <img className="logo" src={Logo} alt="logo" />
                    <form action="/" className="form" ref={form}>
                        <label htmlFor="email" className="label">
                            Email address
                        </label>
                        <input className="input-password input-email" type="email" name="email" placeholder="example@gmail.com" />
                        <label htmlFor="new-password" className="label">
                            Password
                        </label>
                        <input className="input-password" type="password" name="new-password" placeholder="**********" />
                        <button className="primary-button login-button" onClick={handleSubmit}>
                            Log in
                        </button>
                        <p className="resend-login">
                            <a href="/">Forgot my password</a>
                        </p>
                    </form>
                    <button className="secondary-button sign-up" >
                         Sign Up
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;