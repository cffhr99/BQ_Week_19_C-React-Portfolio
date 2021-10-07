import React from 'react';

function Navigation(props){
    const{
        setContactSelected,
        setProjectSelected
    } = props;
    return(
        <ul className="flex-row">
            <li className={`mx-2`}>
                <a href="/"
                onClick={()=> setContactSelected(false) & setProjectSelected(false)}>
                    About me
                </a>
            </li>
            <li className={`mx-2`}>
                <a href="#portifolio"
                onClick={()=> setProjectSelected(true)& setContactSelected(false)}>
                    Portifolio
                </a>
            </li>
            <li className={`mx-2`}>
                <a href="#contact"
                onClick={()=> setContactSelected(true)& setProjectSelected(false)}>
                    Contact
                </a>
            </li>
            <li className={`mx-2`}>
                <a href="#resume">
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default Navigation;