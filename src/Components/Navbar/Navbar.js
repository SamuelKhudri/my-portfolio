import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../Images/logo.png";
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="containerN">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </ul>
                    <ul className="navbar__right">
                        <li><a href="#about">About</a></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><a href="#projecredi">Projects</a></li>
                        <li><Link to="">Skills</Link></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;