import React from 'react';
import './ProjectShow.css';
const projectShow = () => {
    const projects = [
        {
            id: "1",
            name: "Full Stack Website (Diamond-Restaurant)",
            img1: "",
            img2: "",
            img3: "",
            summery: "For UI there will be admin and ordinary users section, login redirect and  have different data input interface based on database according to users",
            details: " • For Client-Site code I use Node.js, React.js, React-router Dom, Firebase and google font-awesome • In the clint site I use mongo dB atlas, node-express, Axios and Cors. In both sides we use git ignore and .env file to keep information secret. • Fully responsive website with functions like update, delete, purchase, review, admin login, manage orders, manage items and add items          ",
            technology: "HTML, CSS, Bootstrap, Tailwind, Node.js, Firebase, MongoDB, Express",
            client: "https://github.com/SamuelKhudri/Diamond-Restora-Client",
            server: "https://github.com/SamuelKhudri/Diamond-Restora-server",
            live: "https://diamond-restaurant.web.app/"
        },
        {
            id: "2",
            name: "Full Stack Website (Call-delivery)",
            img1: "",
            img2: "",
            img3: "",
            summery: "In this project user can order specific item, All ordinary users can log in and log out and their name will be displayed. All the route is redirect",
            details: "• For Client-Site code I use same function like above mentioned project. • In the clint site I use mongo dB atlas, node-express, React.js, Axios and Cors and two types of login system. • Fully responsive website.  Normally users can order products, delete item, give review",
            technology: "HTML, CSS, Bootstrap, Tailwind, Node.js, Firebase, MongoDB, Express",
            client: "https://github.com/SamuelKhudri/call-deliver-client",
            server: "https://github.com/SamuelKhudri/call-deliver-server",
            live: "https://simple-firebase-authenti-b4a63.web.app/"
        },
        {
            id: "3",
            name: "Front-End Website (Health-Care)",
            img1: "",
            img2: "",
            img3: "",
            summery: "In this project user can order specific item, All ordinary users can log in and log out and their name will be displayed. All the route is redirect",
            details: "•	This project is just Front-End website with firebase, HTML, CSS, React and Node.js.• I use json data from public folder to get data.• I use Netlify deploy for live site",
            technology: "HTML, CSS, Bootstrap,  Node.js, Firebase",
            client: "https://github.com/SamuelKhudri/health-care-web",
            server: "",
            live: "https://fir-ema-john.web.app/"
        },

    ]
    return (
        <div class="proShoeBg">
            <div class="box">
                <div class="card">
                    <div class="imgBx">
                        <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                    </div>
                    <div class="details">
                        <h2>Full Stack<br /><span>Diamond-Restaurant</span></h2>
                    </div>
                </div>

                <div class="card">
                    <div class="imgBx">
                        <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                    </div>
                    <div class="details">
                        <h2>SomeOne Famous<br /><span>Producer</span></h2>
                    </div>
                </div>

                <div class="card">
                    <div class="imgBx">
                        <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                    </div>
                    <div class="details">
                        <h2>SomeOne Famous<br /><span>Actor</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default projectShow;