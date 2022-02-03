import React from 'react'
import classes from './Navigation.module.css';
import SocialNetworks from './SocialNetworks/SocialNetworks'

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <div>
        <a href='#d'>Design Bread</a>
      </div>
      <div>
        <a href='#b'>Begginers</a>
      </div>
      <div>
        <a href='#p'>Bread Press</a>
      </div>
      <div>
        <a href='#i'>Interesting Bread</a>
      </div>
      <div>
        <a href='#m'>My Bread</a>
       <SocialNetworks />
      </div>
    </nav>
  )
}

export default Navigation;
