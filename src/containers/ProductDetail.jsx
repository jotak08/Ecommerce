import React from 'react';
import ProductInfo from '../components/ProductInfo';
import '../styles/principal.css';
import Close from '../../assets/icons/icon_close.png'

const ProductDetail = () => {
	return (
		<aside className="product-detail">
			<div className="product-detail-close"> 
                <img src={Close} alt="close" />
            </div>
			<ProductInfo />
		</aside>
	);
}

export default ProductDetail;