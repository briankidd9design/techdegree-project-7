import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    
    return (
        // Copied from example-index.html
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/kieselguitars'>Kiesel Guitars </NavLink></li>
                <li><NavLink to='/fenderguitars'>Fender Guitars</NavLink></li>
                <li><NavLink to='/gibsonguitars'>Gibson Guitars</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;