import React from 'react';
import '../styles/principal.css'
import Header from '../components/Header';

const MyAccount = () => {
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
                            <p className="value">Pepito Perez</p>
                            <label htmlFor="email" className="label">
                            Email address
                            </label>
                            <p className="value">example@gmail.com</p>
                            <label htmlFor="Password" className="label">
                            Password
                            </label>
                            <p className="value">**********</p>
                        </div>
                        <input type="submit" defaultValue="Edit" className="secondary-button account-button" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default MyAccount;