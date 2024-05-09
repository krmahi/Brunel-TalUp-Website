import React from 'react';

import "../styles/AppButton.css"

function AppButton({children,onClick,type,disabled,idname = "white",fweight = 500,fsize = 18, color = "black", bgcolor = "white",width }) {
    return (
        <button type={type} onClick = {onClick} disabled={disabled} className="button" id= {idname} style={{fontSize: fsize, fontWeight: fweight, backgroundColor: bgcolor, color: color, width: width}} >
            {children}
        </button>
    );
}



export default AppButton;