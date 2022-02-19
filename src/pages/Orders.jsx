import React from 'react';
import '../styles/principal.css';
import OrderItems from '../components/OrderItems';
import Header from '../components/Header';


const Orders = () => {
    return (
        <>
            <Header />
            <div className="main-container">
                <div className="main-container--myorder">
                    <h1 className="main-container--title">
                    My orders
                    </h1>
                    <OrderItems />
                </div>
            </div>
        </>
    );
}

export default Orders;