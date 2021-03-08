import React, { useState } from 'react';
import { Link }  from 'react-router-dom'; 
import { NavMenuData } from './NavMenuData';
import styles from './styles/NavMenu.css';
// import { IconContext } from 'react-icons';


function NavMenu() {
  const [sideBar, setSidebar] = useState(false);
    
  const showSidebar = () => setSidebar(!sideBar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
      <div>
        <div className={styles.navbar}>

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
                <svg className={styles.menuIconClose} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Link>
            </li>
        

            {NavMenuData.map((item, index) => {
              return (
                <>
          
                  <ul>
                    <li key={index} className={item.cName} />
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </ul>
           
                </>
              );
            })}

         
          </ ul>
        </nav>
      </div>
      {/* </IconContext.Provider> */}
    </>
  );
}

export default NavMenu;
