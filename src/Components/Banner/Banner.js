import React from 'react';
import './Banner.css';
import {
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
} from "react-icons/fa";

import mypic from "../Images/myself.png";
const Banner = () => {
    const giturl = "https://github.com/SamuelKhudri";
    return (
        <div className="headerB">
            <div className="container">
                <div className="row row-size">
                    <div className="col-md-12 col-lg-6">
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
                                <h1 className='h1-header'>I'm Md Abdus Sakur</h1>
                                <p>I am not professional and experienced but I am confident with my work what I know. Simply
                                    I always like to learn new things from new people and like to fill up my lack and want to
                                    improve new skills.</p>
                                <div className="header__buttons">
                                    <a
                                        href="AbdusSakurResumeFinal.pdf"
                                        download="AbdusSakurResumeFinal.pdf"
                                    >
                                        <button to="" className="mb-3 btn btn-outline">
                                            Get Resume
                                        </button>
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href={giturl} target="_blank" className=" mb-3 btn btn-outline"> GitHub </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="banner__img">
                            <img className='img-fluid' src={mypic} alt="man" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;