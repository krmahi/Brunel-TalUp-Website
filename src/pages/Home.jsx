import React from 'react';

import NavBar from '../components/NavBar';
import HomeImg from '../components/HomeImg';
import HeroCarosel from '../components/HeroCarosel';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
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
            <Faq/>
            <Footer/>
        </>
    );
}

export default Home;