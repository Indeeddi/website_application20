import React from 'react';
import classes from './LogoImage.module.css';



const LogoImage = () =>{
    return(
            <div className={classes.logo}>
            <img src={require('../image/logo4.png')}/>
            <h1>MR.BREAD.COM</h1>
            </div>
    );
}

export default LogoImage;