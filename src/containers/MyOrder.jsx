import React, { useContext } from 'react';
import '../styles/principal.css';
import left from '../../assets/icons/Vector (5).svg';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <aside className='product-detail'>
            <div className='main-container--content'>
                <div className='carrito-title'>
                    <a href='/'>
                        <img src={left} alt="left" />
                    </a>
                    <h1 class="main-carrito--title">
                        My Order
                    </h1>
                </div>
                {state.cart.map(product => (
                    <OrderItem product= {product} key={`orderItem-${product.id}`} />     
                ))}
            
                <div class="order order-carrito"> 
                    <p class="total">Total</p>
                    <p class="valor">$ {sumTotal()}</p>
                </div>
                <button class="primary-button">Checkout</button>
            </div>
        </aside>
    );
}

export default MyOrder;