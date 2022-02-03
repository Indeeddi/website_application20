import React from 'react';
import classes from './Logo.module.css';
import LogoImage from './LogoImage/LogoImage';



const Logo = () =>{
    return(
        <div className='logo-wrapper'>
            <LogoImage />

        </div>
    );
}

export default Logo;