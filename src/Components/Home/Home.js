import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Navbar></Navbar>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>

        </div>
    );
};

export default Home;