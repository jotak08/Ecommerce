import React, { useState, useContext } from 'react';
import '../styles/principal.css';
import AppContext from '../context/AppContext';
import AddToCartimage from '../../assets/icons/bt_add_to_cart.svg';


    const ProductItem = ({ product }) => {
        const { addToCart,removeFromCart } = useContext(AppContext);
        const [ addedToCart,setAddedToCart ] = useState(false);

    const handleAdd = item => {
		addToCart(item);
		setAddedToCart(true);
	}

	const handleRemove= item => {
		removeFromCart(item);
		setAddedToCart(false);
	}

    return (
    <div className="cards-container">
        <div className="product-card">
            <img className="product-img" src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>$ {product.price}</p>
                    <p>{product.title}</p>
                </div>
                {!addedToCart ?
                <figure onClick={() => handleAdd(product)}>
                    <img src={AddToCartimage} alt="add-cart" />
                </figure>
                :
                <figure onClick={() => handleRemove(product)}>
                    <img src="https://www.reactshop.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbt_added_to_cart.ac33eec5.svg&w=48&q=75" alt="close" />
                </figure>
                }
            </div>
        </div>
    </div>

    );
}

export default ProductItem;