import React from 'react';
import './styles.css'

function Navbar() {
    return (

        <nav className='navbar'>
            <img src='houzeo-logo.png' alt='Houzeo-logo' />
            <ul className='nav-list'>
                <li className='nav-item'>Product</li>
                <li className='nav-item'>How Houzeo works</li>
                <li className='nav-item'>Reviews</li>
                <li className='nav-item'>Buy</li>
            </ul>
            <button className='navButton1'>Kaitari NAv de</button>
        </nav>
    )
}

export default Navbar;