import "./Projects.css";
import Project1 from '../Images/project1.PNG';
import Project2 from '../Images/project2.PNG';
import Project3 from '../Images/project3.PNG';
import { NavLink } from "react-router-dom";
// import Project4 from './img/portfolio-4.jpg';

function Project() {
    return (
        <div className="project component__space" id="Portfolio">
            <div className="heading">
                <h1 className="heading">My Latest Project</h1>
                <p className="heading p__color">
                    There are many variations of passages of Lorem Ipsum available,
                </p>
                <p className="heading p__color">
                    but the majority have suffered alteration.
                </p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col__3">
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
                                <NavLink style={{ color: "white" }} to="" className="project__btn">View Details</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project2} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 id="text-c" className="project__text">Full Stack Website (Call-delivery)</h5>
                                <h4 id="text-c" className="project__text">Fully Responsive by using HTML,CSS,React,Node.js,MongoDB</h4>
                                <NavLink style={{ color: "white" }} to="" className="project__btn">View Details</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer relative">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                    <img src={Project3} alt="" className="project__img" />
                                </div>
                                <div className="mask__effect"></div>
                            </div>
                            <div className="project__meta absolute">
                                <h5 id="text-c" className="project__text">Front-End Website (Health-Care)</h5>
                                <h4 id="text-c" className="project__text">Fully Responsive by using HTML,CSS,React,Node.js,MongoDB</h4>
                                <NavLink style={{ color: "white" }} to="" className="project__btn">View Details</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <center> <button className="view__more pointer btnP">View more</button></center>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;
