import React from 'react'
import classes from './Header.module.css'
import Logo from './Logo/Logo'
import NavLinkHeader from './NavLinkHeader/NavLinkHeader'

const Header = () => {
  return (
    <header className={classes.header}>
        <Logo />
        <NavLinkHeader />
    </header>
  );
}

export default Header;
