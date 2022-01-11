import "./Projects.css";
import Project1 from '../Images/project1.PNG';
import Project2 from '../Images/project2.PNG';
import Project3 from '../Images/project3.PNG';
import { Link } from "react-router-dom";
// import Project4 from './img/portfolio-4.jpg';

function Project() {
    return (
        <div className="project component__space" id="projecredi">
            <div style={{ paddingTop: '30px' }} className="heading">
                <h1 className="heading">My Latest Project</h1>
                <p className="heading p__color">
                    These all project has been developed based on React, node.js and java-Script
                </p>
                <p className="heading p__color">
                    Please click view more to know more about it
                </p>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 id="text-c" className="project__text">Full Stack Website (Wish-Collection)</h5>
                                <h4 id="text-c" className="project__text">Fully Responsive by using HTML,CSS,React,Node.js,MongoDB</h4>
                                <Link style={{ color: "#ff00ff", textDecoration: "none" }} to="/projects" className="project__btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 id="text-c" className="project__text">Full Stack-GroupWork (Wish-carZ)</h5>
                                <h4 id="text-c" className="project__text">Fully Responsive by using HTML,CSS,React,Node.js,MongoDB</h4>
                                <Link style={{ color: "#ff00ff", textDecoration: "none" }} to="/projects" className="project__btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-5">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project1} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 id="text-c" className="project__text">Full Stack Website (Diamond-Restaurant)</h5>
                                <h4 id="text-c" className="project__text">Fully Responsive by using HTML,CSS,React,Node.js,MongoDB</h4>
                                <Link style={{ color: "#ff00ff", textDecoration: "none" }} to="/projects" className="project__btn">View Details</Link>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginBottom: '30px', marginTop: '20px' }} className="">
                        <center> <Link to="/projects"><button className="view__more pointer btnP">View more</button></Link> </center>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
