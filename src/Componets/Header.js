import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className="main_menu home_menu">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <a className="navbar-brand" href="index.html"> <img src="assets/img/logo.png" alt="logo" /> </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="menu_icon"><i className="fas fa-bars" /></span>
                            </button>
                            <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="index.html">Home</a> */}
                                        <NavLink to='/' className="nav-link">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="about.html"></a> */}
                                        <NavLink to='/about' className="nav-link">about</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        {/* <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            product
                                        </a> */}
                                        <NavLink to='/productList' className="nav-link dropdown-toggle" id="navbarDropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">product</NavLink>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                                            {/* <a className="dropdown-item" href="product_list.html"> product list</a> */}
                                            <NavLink to='/productList' className="dropdown-item">product list</NavLink>
                                            <NavLink to='/singleProduct' className="dropdown-item">product details</NavLink>
                                            {/* <a className="dropdown-item" href="single-product.html">product details</a> */}
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        {/* <a className="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown_3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            pages
                                        </a> */}
                                        <NavLink to='/' className="nav-link dropdown-toggle"id="navbarDropdown_3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">pages</NavLink>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                            <NavLink to='/login' className="dropdown-item">login</NavLink> 
                                            <NavLink to='/checkout' className="dropdown-item">product checkout</NavLink> 
                                            <NavLink to='/Cart' className="dropdown-item">shopping cart</NavLink> 
                                            <NavLink to='/confirmation' className="dropdown-item">confirmation</NavLink> 
                                            <NavLink to='/element' className="dropdown-item">elements</NavLink> 
                                            {/* <a className="dropdown-item" href="checkout.html">product checkout</a>
                                            <a className="dropdown-item" href="cart.html">shopping cart</a>
                                            <a className="dropdown-item" href="confirmation.html">confirmation</a>
                                            <a className="dropdown-item" href="elements.html">elements</a> */}
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink to='/blog' className="nav-link dropdown-toggle" id="navbarDropdown_2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">blog</NavLink>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown_2">
                                            <NavLink  to='/blog' className="dropdown-item">blog</NavLink>
                                            <NavLink to='/singleBlog' className="dropdown-item">Single blog</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a className="nav-link" href="contact.html">Contact</a> */}
                                        <NavLink to='/contact' className="nav-link">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="hearer_icon d-flex align-items-center">
                                <a id="search_1" href="javascript:void(0)"><i className="ti-search" /></a>
                                {/* <a href="cart.html">
                                   
                                </a> */}
                                <Link to='/cart'> <i className="flaticon-shopping-cart-black-shape" /></Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="search_input" id="search_input_box">
                <div className="container ">
                    <form className="d-flex justify-content-between search-inner">
                        <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                        <button type="submit" className="btn" />
                        <span className="ti-close" id="close_search" title="Close Search" />
                    </form>
                </div>
            </div>
        </header>

    );
}

export default Header;