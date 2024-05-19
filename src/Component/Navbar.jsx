import React from 'react';
import { FaBitcoin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Link style={{ textDecoration: 'none' }} to='/'>
            <div className='navbar'>
                <FaBitcoin className='icon' />
                <h1 className='main-head'>Crypto<span className='cyan'>currency</span></h1>
            </div>
        </Link>
    )
}

export default Navbar;