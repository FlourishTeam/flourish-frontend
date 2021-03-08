import React, { useState } from 'react';
import { Link }  from 'react-router-dom'; 
import { NavMenuData } from './NavMenuData';
import styles from './styles/NavMenu.css';


function NavMenu() {
  const [sideBar, setSidebar] = useState(false);
    
  const showSidebar = () => setSidebar(!sideBar);

  return (
    <>
      <div className={styles.navMenu}>
        <Link to="#" className={styles.menuBars} >
          <svg 
            onClick={showSidebar} 
            className={styles.menuIconOpen} 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg">
            <path 
              fillRule="evenodd" 
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
              clipRule="evenodd" />
          </svg>
        </Link>    
      </div>
      <nav className={styles.sideBar ? 'navMenu active' : 'navMenu'}>
        <ul className={styles.navMenuItems}>
          <li className={styles.navBarToggle}>
            <Link to="#" className={styles.menuBars}>
              <svg className={styles.menuIconClose} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </Link>
          </li>
          {NavMenuData.map((item, index) => {
            return (
              <li key={index} className={item.className} />
            );
          })}

        </ul>
      </nav>
    </>
  );
}

export default NavMenu;
