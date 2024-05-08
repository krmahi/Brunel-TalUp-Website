import React from 'react';
import {Link} from "react-router-dom";

import "../styles/AppButton.css"

function AppButton({children,onClick,disabled = "false",idname = "white",fweight = 500,fsize = 18, color = "black", bgcolor = "white",width }) {
    return (
        <div onClick = {onClick} disabled =  {disabled} className="button" id= {idname} style={{fontSize: fsize, fontWeight: fweight, backgroundColor: bgcolor, color: color, width: width}} >
            {children}
        </div>
    );
}



export default AppButton;