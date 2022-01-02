import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navigation'>
            <nav className='navigation_bar'>
                <div className='nav_right'>
                    <Link to='/'> <span>L</span>earn <span>P</span>rogramming</Link> <br />
                </div>

                <div className='nav_left'>
                    <Link to='/home'>Home</Link>
                    <Link to='/our/courses'>Courses</Link>
                    <Link to='/our/courses/best_seller'>Best Seller</Link>
                    <Link to='/our/contact_us'>Contact Us</Link>
                    <Link to='/our/about_us'>About Us</Link>
                    <Link to='/login'>login</Link>
                    <Link to='/registration'>Register</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;