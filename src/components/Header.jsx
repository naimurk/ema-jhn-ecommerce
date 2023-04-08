import React from 'react';
import logo from "../images/Logo.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-[#1C2B35] py-5 px-28 flex justify-between items-center'>
            <img src= {logo} alt="s" />
            <ul className="menu menu-vertical  text-white lg:menu-horizontal">
                <li className='mx-2  hover:text-red-400' ><Link to={'/'}>shop</Link></li>
                <li className='mx-2  hover:text-red-400' ><Link to={'/orders'}>orders</Link></li>
                <li className='mx-2  hover:text-red-400' ><Link to={'/inventory'}>inventory</Link></li>
                <li className='mx-2  hover:text-red-400' ><Link to={'/login'}>login</Link></li>
             
            </ul>
        </nav>
    );
};

export default Header;