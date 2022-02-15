import React from 'react'; 
import logoM from '../../assets/icons/icon_menu.svg';
import logoN from '../../assets/logos/logo_yard_sale.svg';
import iconCar from '../../assets/icons/icon_shopping_cart.svg';
import iconDown from '../../assets/icons/Path.svg';
import '../styles/Header.scss';

const Header = () => {
    return (
        <nav>
            <img className="menu-navbar"  src={logoM} alt="menu" />
            <div className="navbar-left">
                <img className="logo-navbar" src={logoN} alt="logo_yard_sale" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" >platzi@example.com
                        <span>
                            <a href="">
                                <img src={iconDown} alt="flecha-abajo" />
                            </a>
                        </span>
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={iconCar} alt="shopping-cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;