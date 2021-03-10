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
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default SideBar;
