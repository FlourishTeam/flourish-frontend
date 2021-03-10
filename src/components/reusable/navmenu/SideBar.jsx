import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { menuStyle } from './styles/menuStyle';

const SideBar = ({ show }) => {
  const showSettings = (e) => {
    e.preventDefault();
    show();
  };

  return (
    <Menu styles={menuStyle} right="right">
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
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default SideBar;
