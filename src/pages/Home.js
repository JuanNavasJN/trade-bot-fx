import React from 'react';
import NavBar from '../components/NavBar';
import './Home.css';

const Home = _ => {
    return (
        <div>
            <NavBar />
            <div className="content">
                <header>
                    <h1>Company Name</h1>
                </header>
            </div>
        </div>
    );
};

export default Home;
