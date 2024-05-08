import React from 'react';
import {Link} from "react-router-dom";

import "../styles/AppButton.css"

function AppButton({children,onClick,idname = "white",fweight = 500,fsize = 18, color = "black", bgcolor = "white"}) {
    return (
        <div onClick = {onClick} className="button" id= {idname} style={{fontSize: fsize, fontWeight: fweight, backgroundColor: bgcolor, color: color}} >
            {children}
        </div>
    );
}



export default AppButton;