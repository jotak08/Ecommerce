import React from 'react';
import '../styles/principal.css'

const Menu = () => {
    return (
        <div className="desktop-menu">
            <ul>
                <li>
                <a href="/">My orders</a>
                </li>
                <li>
                <a href="/">My account</a>
                </li>
                <li>
                <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;