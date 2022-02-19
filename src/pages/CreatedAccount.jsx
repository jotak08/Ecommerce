import React from 'react';
import '../styles/principal.css';
import Header from '../components/Header';

const CreatedAccount = () => {
    return (
        <>
            <Header />
            <div className="login-">
                <div className="form-container">
                    <h1 className="title title-account">
                    My account
                    </h1>
                    <form action="/" className="form">
                    <div>
                        <label htmlFor="name" className="label">
                        Name
                        </label>
                        <input className="input-password" type="text" id="Name" placeholder="Pepito Perez..." />
                        <label htmlFor="email" className="label">
                        Email address
                        </label>
                        <input className="input-password" type="email" id="Email address" placeholder="example@gmail.com" />
                        <label htmlFor="Password" className="label">
                        Password
                        </label>
                        <input className="input-password" type="password" id="Password" placeholder="**********" />
                    </div>
                    <input type="submit" defaultValue="Confirm" className="primary-button account-button" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreatedAccount;