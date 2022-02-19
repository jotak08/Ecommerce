import React from 'react';
import '../styles/principal.css';
import Flechita from '../../assets/icons/flechita.svg';
import OrderItem from '../components/OrderItem';

const MyOrder = () => {
    return (
        <aside className='MyOrder'>
            <div className='title-container'>
                <img src={Flechita} alt="arrow" />
				<p className="title">My order</p>
            </div>
            <div className='my-order-content'>
                <OrderItem />
                <div className="order order-carrito"> 
                    <p className="total">Total</p>
                    <p className="valor">$530.00</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default MyOrder;