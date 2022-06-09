import React from 'react';
import Banner from '../Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Projects from '../Projects';
import Skills from '../Skills';
import { Contactme } from '../ContactForm/Contactme';
import Timeline from '../Timeline/Timeline';




const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Timeline></Timeline>
            <Contactme></Contactme>
            <Footer></Footer>

        </div>
    );
};

export default Home;