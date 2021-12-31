import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>This is hader</h1>
            <nav className='navbars'>
                <div>
                    <Link to='/'> <span>L</span>earn <span>P</span>rogramming</Link> <br />
                </div>

                <div>
                    <Link to='/home'>Home</Link> <br />
                    <Link to='/Courses'>Courses</Link> <br />
                    <Link to='/about_us'>About Us</Link> <br />
                    <Link to='/login'>login</Link>
                    <Link to='/register'>Register</Link>
                </div>
            </nav>

        </div>
    );
};

export default Header;