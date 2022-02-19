import React from 'react';
import '../styles/principal.css';
import leftVector from '../../assets/icons/Vector (5).svg';
import close from '../../assets/icons/icon_close.png';


const OrderItem = () => {
    return (
    <aside className="">
        <div className="">
            <div className="container-shopping--card">
                <figure>
                    <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg" alt="byke" />
                </figure>
                <p>Byke</p>
                <p>$120,00</p>
                <a href="/">
                    <img src={close} alt="close" />
                </a>
            </div>
            <div className="container-shopping--card">
                <figure>
                    <img src="https://images.pexels.com/photos/947885/pexels-photo-947885.jpeg?cs=srgb&dl=pexels-alizee-marchand-947885.jpg&fm=jpg" alt="glasses" />
                </figure>
                <p>Glasses</p>
                <p>$50,00</p>
                <a href="/">
                    <img src={close} alt="close" />
                </a>
            </div>
            <div className="container-shopping--card">
                <figure>
                    <img src="https://images.pexels.com/photos/5710079/pexels-photo-5710079.jpeg?cs=srgb&dl=pexels-ox-street-5710079.jpg&fm=jpgg" alt="Jordan" />
                </figure>
                <p>Jordan</p>
                <p>$150,00</p>
                <a href="/">
                    <img src={close} alt="close" />
                </a>
            </div>
            <div className="container-shopping--card">
                <figure>
                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" alt="wristwatch" />
                </figure>
                <p>Wristwatch</p>
                <p>$210,00</p>
                <a href="/">
                    <img src={close} alt="close" />
                </a>
            </div>
          </div>
    </aside>

    );
}

export default OrderItem;