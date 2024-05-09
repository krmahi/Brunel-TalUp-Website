import React, { useState } from 'react';

import NavBar from '../components/NavBar';
import HomeImg from '../components/HomeImg';
import HeroCarosel from '../components/HeroCarosel';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';
import "../styles/Home.css"

function Home() {

    const [isHovered, setIsHovered]= useState(false);

    return (
        <>
            <Cursor isHovered = {isHovered}/>
            <NavBar />
            <div className="homediv">
                <h1 className='home1'>Success stories</h1>
                <h1 onMouseEnter = {() =>{setIsHovered(true)}} className='home2' onMouseLeave={() => {setIsHovered(false)}}>Every success journey we’ve encountered.</h1>
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