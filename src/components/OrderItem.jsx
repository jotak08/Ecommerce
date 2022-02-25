import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/principal.css';
import close from '../../assets/icons/icon_close.png';


const  OrderItem = ({product}) => {
    const { removeFromCarts } = useContext(AppContext);

    const handleRemove = product => {
        removeFromCarts(product);
    }

    return (
        <div className="container-shopping--card">
            <figure>
                <img src={product.images[0]} alt={product.title} />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <a href="javascript:void(0)">
                <img src={close} alt="close" onClick={() => handleRemove(product)}/>
            </a>
        </div>
    ); 
    }

export default OrderItem;