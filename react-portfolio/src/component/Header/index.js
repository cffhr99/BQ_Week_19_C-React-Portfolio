import React from 'react';
import Navigation from '../Navigation';
function Header(props){
    const{
        contactSelected,
        setContactSelected,
        projectSelected,
        setProjectSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    return(
        <header className='flex-row px-1'>
            <h2>
                <a data-testid="link" href="/">
                     Littlema
                </a>
            </h2>
            <Navigation 
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
            projectSelected ={projectSelected}
            setProjectSelected={setProjectSelected}
            resumeSelected={resumeSelected}
            setResumeSelected={setResumeSelected}
            />
        </header>
    )
}

export default Header;