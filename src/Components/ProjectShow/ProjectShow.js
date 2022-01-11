import React from 'react';
import './ProjectShow.css';
const projectShow = () => {
    const projects = [
        {
            id: "1",
            name: "Full Stack Website (Wish-Collection)",
            img1: "https://i.ibb.co/gTYXyZp/4.png",
            img2: "https://i.ibb.co/nQC2n8K/5.png",
            img3: "https://i.ibb.co/hcfLqHb/6.png",
            summery: "In this project user can order specific item, All ordinary users can log in and log out and their name will be displayed. All the route is redirect",
            details: "• For Client-Site code I use same function like above mentioned project. • In the clint site I use mongo dB atlas, node-express, React.js, Axios and Cors and two types of login system. • Fully responsive website.  Normally users can order products, delete item, give review",
            technology: "HTML, CSS, Bootstrap, Tailwind, Node.js, Firebase, MongoDB, Express, Stripe",
            client: "https://github.com/SamuelKhudri/wish-collection-client",
            server: "https://github.com/SamuelKhudri/wish-collection-server",
            live: "https://wish-collection-7fc6e.web.app/"
        },
        {
            id: "2",
            name: "Full Stack-Group(Wish-carZ)",
            img1: "https://i.ibb.co/26bcV3L/1.png",
            img2: "https://i.ibb.co/Nrh3Z3q/2.png",
            img3: "https://i.ibb.co/bBgk77P/3.png",
            summery: "In this project user can order specific item, All ordinary users can log in and log out and their name will be displayed. All the route is redirect",
            details: "•	This project is just Front-End website with firebase, HTML, CSS, React and Node.js.• I use json data from public folder to get data.• I use Netlify deploy for live site",
            technology: "HTML, CSS, Bootstrap,  Node.js, Firebase, Stripe",
            client: "https://github.com/abdullah-mumin/wish_client/tree/sakur/",
            server: "https://github.com/abdullah-mumin/wish_server/tree/sakur",
            live: "https://wish-carz-510b1.web.app/",
            report: "https://docs.google.com/presentation/d/1e4R04nF2UAQkdJFZ4t5dzPUPppcKKfqTPYXvwvK7I8k/edit#slide=id.g108d126d638_0_133"
        },
        {
            id: "3",
            name: "Full Stack Website (Diamond-Restaurant)",
            img1: "https://i.ibb.co/C10QNfm/f06d7fedf665667f5e6e5cb32b631cd.png",
            img2: "https://i.ibb.co/yS0Mkpn/c1212dd9d3c49a2931ad313eddacee7.png",
            img3: "https://i.ibb.co/Mpb5wqq/396cdcf3bfe239345019b0f5f5fc82a.png",
            summery: "For UI there will be admin and ordinary users section, login redirect and  have different data input interface based on database according to users",
            details: " • For Client-Site code I use Node.js, React.js, React-router Dom, Firebase and google font-awesome • In the clint site I use mongo dB atlas, node-express, Axios and Cors. In both sides we use git ignore and .env file to keep information secret. • Fully responsive website with functions like update, delete, purchase, review, admin login, manage orders, manage items and add items          ",
            technology: "HTML, CSS, Bootstrap, Tailwind, Node.js, Firebase, MongoDB, Express",
            client: "https://github.com/SamuelKhudri/Diamond-Restora-Client",
            server: "https://github.com/SamuelKhudri/Diamond-Restora-server",
            live: "https://diamond-restaurant.web.app/"
        },

    ]
    return (
        <div class="proShoeBg">
            <center>
                <h2 className="project-head">My Projects</h2>
                <div style={{ paddingBottom: "10px" }} className="commonBorder"></div>
                <a
                    href="AbdusSakurResumeFinal.pdf"
                    download="AbdusSakurResumeFinal.pdf"
                >
                    <button to="" className="btn btn-outline">
                        Get Resume
                    </button>
                </a>
            </center>
            <div class="box mt-5">
                {projects.map((project) => <div >
                    <div className='card-flexx'>
                        <div class="card">
                            <div class="imgBx">
                                <img src={project.img1} alt="images" />
                            </div>
                            <div class="details">
                                <h2>{project.name}</h2>
                            </div>
                        </div>

                        <div class="card">
                            <div class="imgBx">
                                <img src={project.img2} alt="images" />
                            </div>
                            <div class="details">
                                <h2>{project.name}</h2>
                            </div>
                        </div>

                        <div class="card">
                            <div class="imgBx">
                                <img src={project.img3} alt="images" />
                            </div>
                            <div class="details">
                                <h2>{project.name}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-element">
                        <h2 style={{ color: '#ff4a57', fontWeight: '700' }}>{project.name}</h2>
                        <p style={{ color: 'white', fontWeight: '500' }}>
                            <span>Description: </span>
                            {project.summery}
                        </p>
                        <p style={{ color: 'white', fontWeight: '500' }}>
                            <span>Technology: </span>
                            {project.technology}
                        </p>
                        <p style={{ color: 'white', fontWeight: '500' }}>
                            <span>User Function: </span>
                            {project.details}
                        </p>
                        <a className='link-clr' target="_blank" href={project.client}>
                            {" "}
                            Client Side link
                        </a>
                        <a className='link-clr' target="_blank" href={project.server}>
                            {" "}
                            Server Side link
                        </a>
                        <a className='link-clr' target="_blank" href={project.live}>
                            {" "}
                            Live Site link
                        </a>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default projectShow;