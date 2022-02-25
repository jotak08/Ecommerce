import React,  { useState, useContext } from 'react'; 
import logoM from '../../assets/icons/icon_menu.svg';
import logoN from '../../assets/logos/logo_yard_sale.svg';
import iconCar from '../../assets/icons/icon_shopping_cart.svg';
import iconDown from '../../assets/icons/Path.svg';
import Menu from '../components/Menu';
import '../styles/Header.scss';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState (false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className='nav-'>
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
            <div className="navbar-right2">
                <ul>
                    <li className="navbar-email">platzi@example.com
                        <span>
                            <a href="javascript:void(0);" onClick={handleToggle}>
                                <img src={iconDown} alt="flecha-abajo" />
                            </a>
                        </span>
                    </li>
                    <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                        <img className='carrito' src={iconCar} alt="shopping-cart" />
                        {state.cart.length > 0 ? <div>${state.cart.length}</div> : null}
                    </li>
                </ul>   
            </div>
            {toggle && <Menu />}
            {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;