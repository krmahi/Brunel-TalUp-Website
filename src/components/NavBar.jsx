import React from 'react';
import {Link, BrowserRouter} from "react-router-dom";

import '../styles/NavBar.css';
import Logo from "../assets/AppLogo.svg"
import AppButton from './AppButton';

function NavBar() {
    
    return (

            <div className="navbar">
                <img src={Logo} alt="Logo" className="logo"/>
                <div className="buttoncontainer">
                    <Link to='/register' style={{textDecoration: 'none'}}><AppButton>Get Project</AppButton></Link>
                    <Link to='/' style={{textDecoration: 'none'}}><AppButton idname="black" fweight={600} color='white' bgcolor='#1C1C1C'>Onboard Talent</AppButton></Link>
                </div>
            </div>

    );
}

export default NavBar;