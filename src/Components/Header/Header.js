import React from 'react';
import { Link } from 'react-router-dom';
import UseAuthProvider from '../../Hooks/UserAuthProvider';
import avatar from '../../images/avatar.png'
import './Header.css'

const Header = () => {
    const { logout, user } = UseAuthProvider()
    return (
        <>
            <div className='navigation '>
                <nav className='navigation_bar container m-auto'>
                    <div className='nav_right'>
                        <Link to='/'> <span>L</span>earn <span>P</span>rogramming</Link> <br />
                    </div>

                    <div className='nav_left'>
                        <Link to='/home'>Home</Link>
                        <Link to='/our/courses'>Courses</Link>
                        <Link to='/our/courses/best_seller'>Best Seller</Link>
                        <Link to='/our/contact_us'>Contact Us</Link>
                        <Link to='/our/about_us'>About Us</Link>
                        {
                            user.photoURL || user.email ? <div className='profile'><span> <button className="myBtn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><img src={user.photoURL ? user.photoURL : avatar} alt="Avater" /></button> </span> &nbsp; &nbsp;
                                <button onClick={logout} className='btn btn-danger me-5'>Logout</button> </div> :
                                [
                                    <Link to='/login'>login</Link>,
                                    <Link to='/registration'>Register</Link>
                                ]
                        }
                    </div>
                </nav>
            </div>


            <div className="Login">
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog w-25">
                        <div className="modal-content my-modal">
                            <div className="modal-header">
                                <h6 className="modal-title" id="staticBackdropLabel">User Information</h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img className='img' src={user.photoURL ? user.photoURL : avatar} alt="" srcset="" width={150} />
                                <div className="mt-4">
                                    <p>Name: {user?.displayName}</p>
                                    <p>Email: {user?.email}</p>
                                    <p>Email Verifide: {String(user?.emailVerified)}</p>
                                    <p>Last Sign In: {user?.metadata?.lastSignInTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Header;