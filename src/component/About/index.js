import React from "react";

function About(){


    return(
        <div className='flex-row'>
            <div className='mx-1'>
            <h1>
                Littlema
            </h1>
            <img 
            src={require(`../../assets/image/cat.JPG`).default}
            className="img-thumbnail2"
            alt = 'cat'
            />
            </div>
            <div className='mx-1'>
                <p>
                 I am a New Coder with a Experienced Driver and a Great Chef.
                </p>
            </div>
        </div>
    )
}

export default About;