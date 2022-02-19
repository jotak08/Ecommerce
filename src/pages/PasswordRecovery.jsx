import React from 'react';
import '../styles/principal.css';
import Logo from '../../assets/logos/logo_yard_sale.svg';
import Header from '../components/Header';

const PasswordRecovery = () => {
	return (
		<>
			<Header />
			<div className="PasswordRecovery">
				<div className="PasswordRecovery-container">
					<img src={Logo} alt="logo" className="logo" />
					<h1 className="title">Password recovery</h1>
					<p className="subtitle">Inform the email address used to create your account</p>
					<form action="/" className="form">
						<label htmlFor="email" className="label">Email address</label>
						<input type="text" id="email" className="input-password input-email" />
						<input type="submit" value="Confirm" className="primary-button login-button" />
					</form>
				</div>
			</div>
		</>
	);
}

export default PasswordRecovery;