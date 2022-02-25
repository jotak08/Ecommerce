import React from 'react';
import '../styles/principal.css';
import Flechita from '../../assets/icons/flechita.svg'

const OrderItems = () => {
    return (
        <div className="main-container--content">
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
            <div className="orders"> 
                <p>
                    <span>05.25.21</span>
                    <span>1 article</span>
                    </p>
                <p>$ 120.00</p>
                <a href="/">
                <img src={Flechita} alt="flechita" />
                </a> 
            </div>
            <div className="orders"> 
                <p>
                    <span>06.02.21</span>
                    <span>2 articles</span>
                </p>
                <p>$ 230.00</p>
                <a href="/">
                <img src={Flechita} alt="flechita" />
                </a> 
            </div>
            <div className="orders"> 
                <p>
                    <span>07.25.21</span>
                    <span>5 articles</span>
                </p>
                <p>$ 890.00</p>
                <a href="/">
                <img src={Flechita} alt="flechita" />
                </a> 
            </div>
            <div className="orders"> 
                <p>
                    <span>08.25.21</span>
                    <span>4 articles</span>
                </p>
                <p>$ 720.00</p>
                <a href="/">
                <img src={Flechita} alt="flechita" />
                </a> 
            </div>
            <div className="orders"> 
                <p>
                    <span>08.15.21</span>
                    <span>3 articles</span>
                </p>
                <p>$ 610.00</p>
                <a href="/">
                <img src={Flechita} alt="flechita" />
                </a> 
            </div>
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
        </div>   
    );
}

export default OrderItems;