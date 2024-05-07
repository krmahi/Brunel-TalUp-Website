import React from 'react';

import NavBar from '../components/NavBar';
import HomeImg from '../components/HomeImg';
import HeroCarosel from '../components/HeroCarosel';
import "../styles/Home.css"

function Home() {
    return (
        <>
            <NavBar/>
            <div className="homediv">
                <h1 className='home1'>Success stories</h1>
                <h1 className='home2'>Every success journey we’ve encountered.</h1>
            </div>

            <div className="caroseldiv">
                <HomeImg/>
                <HeroCarosel/>
            </div>
        </>
    );
}

export default Home;