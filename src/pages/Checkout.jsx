import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/principal.css';
import Header from '../components/Header';

const Checkout = () => {
    return (
        <>
            <Header />
            <div className="main-container">
                <div className="main-container--myorder">
                    <h1 className="main-container--title">
                        My order
                    </h1>
                    <div className="main-container--content">
                        <div className="order"> 
                            <p>
                                <span>03.25.21</span>
                                <span>4 articles</span>
                            </p>
                            <p>$530.00</p>
                        </div>
                    </div>
                        <OrderItem />
                </div>
            </div>
        </>
    );
}

export default Checkout;