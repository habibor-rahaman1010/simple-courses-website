import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <footer className="text-center text-lg-start bg-light text-muted sticky-bottom mt-5">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom pe-5 ps-5">

                    <div className="d-none d-lg-block  ">
                        <span className='ps-5'>Get connected with us on social networks:</span>
                    </div>



                    <div className='pe-5'>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="/" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </section>



                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Learn &nbsp;&nbsp; Programming
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>



                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Courses
                                </h6>
                                <p>
                                    <Link to={'/#Anguler!'} className="text-reset">Angular</Link>
                                </p>
                                <p>
                                    <Link to={"/#React!"} className="text-reset">React</Link>
                                </p>
                                <p>
                                    <Link to={"/#Vue!"} className="text-reset">Vue</Link>
                                </p>
                                <p>
                                    <Link to={"/#Laravel!"} className="text-reset">Laravel</Link>
                                </p>
                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to={"/#Pricing!"} className="text-reset">Pricing</Link>
                                </p>
                                <p>
                                    <Link to={"/#Settings!"} className="text-reset">Settings</Link>
                                </p>
                                <p>
                                    <Link to={"/#Orders!"} className="text-reset">Orders</Link>
                                </p>
                                <p>
                                    <Link to={"/#Help!"} className="text-reset">Help</Link>
                                </p>
                            </div>



                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact us
                                </h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2021 Copyright -
                    <a className="text-reset fw-bold" href="https://www.facebook.com"> Learn Programming Platform.</a>
                </div>

            </footer >
        </div >
    );
};

export default Footer;