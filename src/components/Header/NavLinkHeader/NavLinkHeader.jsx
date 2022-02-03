import React from 'react'
import classes from './NavLinkHeader.module.css'


const NavLinkHeader = () => {
  return (
    <nav className={classes.navL}>
    <ul>
      <li><a href='#archive'>Archive </a> </li>
      <li><a href='#contact'>Contact </a></li>
      <li><a href='#friends'>Friends</a></li>
    </ul>
  </nav>
  );
}

export default NavLinkHeader;



