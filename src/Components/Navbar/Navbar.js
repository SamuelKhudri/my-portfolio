import React from 'react';
import { Link } from 'react-router-dom';
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
                        <li><Link to="">Home</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Projects</Link></li>
                        <li><Link to="">Skills</Link></li>
                        <li><Link to="">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;