import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';
import logo from "../Images/logo.png";
import './Navbar.css';
const Navbar = () => {
    return (
        <div>
            <div className="navmother">
                <nav className="navbar navbar-expand-lg navbar-light nav-bgcolor">
                    <div className="container-fluid navbar-side">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="" width="80" height="70" />
                        </a>
                        <button className="navbar-toggler togol-cl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon " ></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projecredi">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skill">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                                {/* <li><a href="#about">About</a></li>
                                 <li><NavLink to="/blog">Blog</NavLink></li> */}
                                {/* <li><a href="#projecredi">Projects</a></li>
                               <li><Link to="">Skills</Link></li>
                                <li><a href="#contact">Contact</a></li> */}


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;