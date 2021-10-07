import React from 'react';

function Navigation(props){
    const{
        setContactSelected,
        setProjectSelected,
        setResumeSelected
    } = props;
    console.log(props)
    return(
        <ul className="flex-row">
            <li className={`mx-2`}>
                <a href="/"
                onClick={()=> setContactSelected(false) & setProjectSelected(false) & setResumeSelected(false)}>
                    About me
                </a>
            </li>
            <li className={`mx-2`}>
                <a href="#portifolio"
                onClick={()=> setProjectSelected(true) & setContactSelected(false)& setResumeSelected(false)}>
                    Portifolio
                </a>
            </li>
            <li className={`mx-2`}>
                <a href="#contact"
                onClick={()=> setContactSelected(true)& setProjectSelected(false) & setResumeSelected(false)}>
                    Contact
                </a>
            </li>
            <li className={`mx-2`}>
                <a href="#resume"
                onClick={()=> setContactSelected(false)& setProjectSelected(false)& setResumeSelected(true)}>
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default Navigation;