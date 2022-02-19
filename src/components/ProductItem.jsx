import React, { useState } from 'react';
import '../styles/principal.css';
import AddToCart from '../../assets/icons/bt_add_to_cart.svg';



const ProductItem = () => {
    const [cart, setCart] = useState('');

    const handleClick = () => {
        setCart('Hola Mundo');
    }

    return (
    <div className="cards-container">
        <div className="product-card">
            <img className="product-img" src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg" alt="bike" />
            <div className="product-info">
                <div>
                    <p>$ 120,00</p>
                    <p>Bike</p>
                </div>
                <figure onClick={handleClick}>
                    <a href>  
                    <img src={AddToCart} alt="add-cart" /></a>
                </figure>
                {cart}
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://images.pexels.com/photos/19677/pexels-photo.jpg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-19677.jpg&fm=jpg" alt="puzzle" />
            <div className="product-info">
                <div>
                    <p>$ 10,00</p>
                    <p>Rubik</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" /></a>
                </figure>
                
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?cs=srgb&dl=pexels-alizee-marchand-947885.jpg&fm=jpg" alt="glasess" />
            <div className="product-info">
                <div>
                    <p>$ 50,00</p>
                    <p>Glasses</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" /></a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg?cs=srgb&dl=pexels-sound-on-3394656.jpg&fm=jpg" alt="headphones" />
            <div className="product-info">
                <div>
                    <p>$ 180,00</p>
                    <p>Headphones</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" /></a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="wristwatch" />
            <div className="product-info">
                <div>
                    <p>$ 210,00</p>
                    <p>Wristwatch</p>
                </div>
                <figure>
                    <a href="/"> 
                    <img src={AddToCart}alt="add-cart" /></a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="camera" />
            <div className="product-info">
                <div>
                    <p>$ 400,00</p>
                    <p>Cemera</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" /></a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://images.pexels.com/photos/5710079/pexels-photo-5710079.jpeg?cs=srgb&dl=pexels-ox-street-5710079.jpg&fm=jpg" alt="Jordan" />
            <div className="product-info">
                <div>
                    <p>$ 150,00</p>
                    <p>Jordan</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" />
                    </a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?cs=srgb&dl=pexels-ge-yonk-1152077.jpg&fm=jpg" alt="briefcase" />
            <div className="product-info">
                <div>
                    <p>$ 90,00</p>
                    <p>Briefcase</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" />
                    </a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs-jpg.webp" alt="macbook" />
            <div className="product-info">
                <div>
                    <p>$ 500,00</p>
                    <p>Macbook</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" />
                    </a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://i.blogs.es/81b80b/apple-watch-s4/1366_2000.jpg" alt="smartwhatch" />
            <div className="product-info">
                <div>
                    <p>$ 200,00</p>
                    <p>Apple Watch</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" />
                    </a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://i.linio.com/p/84f251672163df818e332c32774f9c38-product.webp" alt="computer-chair" />
            <div className="product-info">
                <div>
                    <p>$ 120,00</p>
                    <p>Computer chair</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" />
                    </a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/0e0d9ac20e194157a7daad96010faa27_9366/Buzo_de_polar_con_capucha_Reebok_Identity_Logo_Azul_GS9393_13_standard.jpg" alt="buso" />
            <div className="product-info">
                <div>
                    <p>$ 60,00</p>
                    <p>Buso</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" />
                    </a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="http://a0.cdnfan.com/images/M/2/6/6/0/bluetooth-en-el-casco_hd_89416.jpg" alt="casco moto" />
            <div className="product-info">
                <div>
                    <p>$ 180,00</p>
                    <p>Casco moto</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" />
                    </a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="ps5" />
            <div className="product-info">
                <div>
                    <p>$ 400,00</p>
                    <p>Ps5</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" />
                    </a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://odinstore.co/wp-content/uploads/2021/10/GorraHDPinkfloyd-2.jpg" alt="gorra" />
            <div className="product-info">
                <div>
                    <p>$ 20,00</p>
                    <p>Gorra</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" /></a>
                </figure>
            </div>
        </div>
        <div className="product-card">
            <img className="product-img" src="https://lamanzanamordida.net/app/uploads-lamanzanamordida.net/2020/05/dispositivos-compatibles-airpods.jpg" alt="airpods" />
            <div className="product-info">
                <div>
                    <p>$ 120,00</p>
                    <p>Airpods</p>
                </div>
                <figure>
                    <a href="/">
                    <img src={AddToCart}alt="add-cart" />
                    </a>
                </figure>
            </div>
        </div>
    </div>

    );
}

export default ProductItem;