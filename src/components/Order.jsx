import React from 'react';
import Flechita from '../../assets/icons/flechita.svg';
import '../styles/principal.css';

const Order = () => {
    return (
        <div className="orders"> 
            <p>
                <span>03.25.21</span>
                <span>4 articles</span>
            </p>
            <p>$ 530.00</p>
            <a href="/">
                <img src={Flechita} alt="flechita" />
            </a> 
        </div>
    );
}

export default Order;