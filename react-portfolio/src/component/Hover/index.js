import React from "react";

function Hover({currentProject}) {
    const{name,github,index} = currentProject;

    return(
        <div className='modalBackdrop'>
            <div className='modalContainer'>
            <p>{name}</p>
            </div>
        </div>
    )
}

export default Hover;