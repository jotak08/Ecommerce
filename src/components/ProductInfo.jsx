import React from 'react';
import '../styles/principal.css';
import AddCar from '../../assets/icons/Shape.svg'

const ProductInfo = () => {
    return (
        <div className='product-detail'>
        <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg" alt="bike" />
        <div className="dots">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
        </div>
        <div className="product-info-cart">
            <p>$ 120,00</p>
            <p>Bike</p>
            <p>Assembly tutorial video located beside the images; with a Denim Blue hardtail frame and 21 speeds to conquer the trails, the Huffy Stone Mountain is ready for outdoor adventures; just follow the steps in our product manual.
                <br />
                <br />
                An exclusive: Ideal for ages 13 and up and a minimum rider height of 5 feet; durable steel frame backed by our limited lifetime warranty (see owner's manual); suspension fork handles bumps and dips for a smoother-feeling ride</p>
            <button className="primary-button add-to-cart-button">
                <img src={AddCar} alt="add-car" />
                Add to cart
            </button>
        </div>
    </div>

    );
}

export default ProductInfo;