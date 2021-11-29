import React from 'react';
import './Banner.css';
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import mypic from "../Images/myself.png";
const Banner = () => {
    return (
        <header className="header">
            <div className="containerN">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header__ul">
                                    <li>
                                        <FaFacebookF className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaTwitter className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaPinterest className="headerIcon" />
                                    </li>
                                    <li>
                                        <FaInstagram className="headerIcon" />
                                    </li>
                                </ul>
                                <h1>I'm Md Abdus Sakur</h1>
                                <p>I am not professional and experienced but I am confident with my work what I know. Simply
                                    I always like to learn new things from new people and like to fill up my lack and want to
                                    improve new skills.</p>
                                <div className="header__buttons">
                                    <a
                                        href="AbdusSakurResumeFinal.pdf"
                                        download="AbdusSakurResumeFinal.pdf"
                                    >
                                        <button to="" className="btn btn-outline">
                                            Get Resume
                                        </button>
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <Link to="" className="btn btn-outline">
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src={mypic} alt="man" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;