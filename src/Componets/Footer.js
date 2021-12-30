import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="footer_part">
            <div className="footer_iner">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-8">
                            <div className="footer_menu">
                                <div className="footer_logo">
                                    <a href="index.html"><img src="assets/img/logo.png" alt="#" /></a>
                                </div>
                                <div className="footer_menu_item">
                                    <Link to='/'>Home</Link>
                                    <Link to='/about'>About</Link>
                                    <Link to='/productList'>Products</Link>
                                    <Link to='/login'>Pages</Link>
                                    <Link to='/blog'>Blog</Link>
                                    <Link to='/contact'>Contact</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="social_icon">
                                <NavLink to={{pathname: "https://www.facebook.com/"}} target="_blank">
                                    <i className="fab fa-facebook-f" />
                                </NavLink>
                                <NavLink to={{pathname:"https://www.facebook.com/"}}>
                                <i className="fab fa-instagram" />
                                </NavLink>
                                <NavLink to={{pathname:"https://www.facebook.com/"}}>
                                <i className="fab fa-google-plus-g" />
                                </NavLink>
                                <NavLink to={{pathname:"https://www.facebook.com/"}}>
                                <i className="fab fa-linkedin-in" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright_part">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="copyright_text">
                                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright © All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                                <div className="copyright_link">
                                    {/* <a href="#">Turms &amp; Conditions</a> */}
                                    <Link to='/'>Turms &amp; Conditions</Link>
                                    <a href="#">FAQ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;