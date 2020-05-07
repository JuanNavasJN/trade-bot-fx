import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Home/Header';
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import ContactUs from '../components/Home/ContactUs';

import './Home.css';

const Home = _ => {
    return (
        <div>
            <NavBar />
            <div className="content">
                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <ContactUs />
            </div>
        </div>
    );
};

export default Home;
