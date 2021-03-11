import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { menuStyle } from './styles/menuStyle';
import styles from './styles/NavMenu.css';

const NavMenu = () => {
  return (
    <Menu className={styles.NavMenu} styles={menuStyle} right={true}>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="search" className="menu-item" href="/search">
        Search Flourish Library
      </a>
      <a id="my-plants" className="menu-item" href="/my-plants">
        My Plants
      </a>
      <a id="about-us" className="menu-item" href="/about-us">
        About Us
      </a>
      <a
        id="sign-out"
        className="menu-item"
        onClick={(e) => e.preventDefault()}
        href=""
      >
        Sign Out
      </a>
    </Menu>
  );
};

export default NavMenu;
