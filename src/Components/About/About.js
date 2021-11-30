import React from "react";
import './About.css';
import myself1 from "../Images/myself1.png";

const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text:
            "I'm basically Front-End Developer.I have been doing it from one year.",
    });
    const [state] = React.useState([
        { id: 1, title: "Name:", text: "ABDUS SAKUR" },
        { id: 2, title: "Email:", text: "abdussakur3332@gmail.com" },
        { id: 3, title: "Phone:", text: "+8801962531213" },
        { id: 4, title: "Linkedin", text: "Sakur Md abdus" },
    ]);
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row  h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src={myself1} alt="man" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about__info">
                            <h1>Hi</h1>
                            <div className="about__info-p1">
                                I am front-End Developer with certain experience and creativity. I love to do coding with lot
                                of enjoyment. Now, I am doing my BSc in Computer Science at Yunnan University. I learn lot of things
                                through my University life.
                            </div>
                            <div className="about__info-p2">
                                I love travelling a lot. Sometimes i would love to read books to learn new things and i always find myself
                                in a new way to explore myself. i always beleive in myself that everything has a solution just need patience.
                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    {state.map((info) => (
                                        <div className="col-6">
                                            <strong>{info.title}</strong>
                                            <p>{info.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
