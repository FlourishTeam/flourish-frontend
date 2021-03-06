import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useLogout, useSession } from '../../../providers/AuthContext';
import { menuStyle } from './styles/menuStyle';
import styles from './styles/NavMenu.css';

const NavMenu = () => {
  const logout = useLogout();
  const user = useSession();
  const [isOpen, setIsOpen] = useState(null);

  const handleDelete = (e) => {
    e.preventDefault();
    logout();
    setIsOpen(false);
  };

  return (
    <>
      {user
        ? (
          <>
            <Menu
              className={styles.NavMenu}
              styles={menuStyle}
              right={true}
              isOpen={isOpen}>
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
              <a id="sign-out" className="menu-item" onClick={handleDelete} href="/">
            Log Out
              </a>
            </Menu>
          </>
        ) : (
          <>
            <Menu
              className={styles.NavMenu}
              styles={menuStyle}
              right={true}
              isOpen={isOpen}>
              <a id="home" className="menu-item" href="/">
            Home
              </a>
              <a id="search" className="menu-item" href="/search">
            Search Flourish Library
              </a>
              <a id="about-us" className="menu-item" href="/about-us">
            About Us
              </a>
            </Menu>
          </>
        )}
    </>
  );
};

export default NavMenu;
