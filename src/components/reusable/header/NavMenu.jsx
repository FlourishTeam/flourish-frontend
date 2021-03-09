// import React, { useState } from 'react';
// import { Link }  from 'react-router-dom'; 
// import { NavMenuData } from './NavMenuData';
// import styles from './styles/NavMenu.css';
// import { IconContext } from 'react-icons';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';


// function NavMenu() {
//   const [sideMenu, setSideMenu] = useState(true);
    
//   const showSideMenu = () => {
//     setSideMenu(!sideMenu);
//     console.log('click');
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
      
//         <div className={styles.navMenu}>

//           <Link to="#" className={styles.menuBars} >
//             <FaIcons.FaBars onClick={showSideMenu} />
//           </Link>    
//         </div>
//         <nav className={sideMenu ? styles.menuBars.active : styles.menuBars }>
        
        
//           <ul className={styles.navBarItems} onClick={showSideMenu}>
//             <li className={styles.navMenuToggle}>

//               <Link to="#" className={styles.menuBars}>
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
        

//             {NavMenuData.map((item, index) => {
//               return (
//                 <>
//                   <li key={index} className={item.cName} />
//                   <Link to={item.path}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </>
//               );
//             })}

         
//           </ ul>
//         </nav>
      
//       </IconContext.Provider>
//     </>
//   );
// }

// export default NavMenu;
