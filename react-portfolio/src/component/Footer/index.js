import React from 'react';

function Footer(){
return(
    <div className='footer flex-row space-between'>
    <div>
     <a href='https://github.com/cffhr99'>
         <img 
         src={require(`../../assets/logo/github.png`).default} 
         className='logo'
         ></img></a>
    </div>
    <div>
     <a href='mailto:qlittlema@gmail.com'>
         <img 
         src={require(`../../assets/logo/mail.png`).default} 
         className='logo'
         ></img></a>
    </div>
    </div>
)
}

export default Footer;