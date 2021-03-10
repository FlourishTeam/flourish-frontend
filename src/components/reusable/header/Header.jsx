import React, { useState } from 'react';
import styles from './styles/Header.css';
import flourishIcon from '../../../images/flourish-icon-2.png';
import NavMenu from './NavMenu.jsx';
import Popup from 'reactjs-popup';
import Signup from '../../auth/Signup';
import { useUser } from '../../../state/AuthContext';

function Header() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const user = useUser();
  console.log(user);

  return (
    <div className={styles.header}>
      <img className={styles.icon} src={flourishIcon} />
      <div>Hello {user.name}!</div>
      <NavMenu />
      
      <div className={styles.headerRight}>
        <Popup
          modal
          closeOnDocumentClick={true}
          trigger={open => 
            <button 
              open={open} 
              className={styles.loginButton}>Sign Up / Log In</button>
          }>
          { <Signup 
            open={open} 
            name={name}
            email={email}
            setName={setName}
            setEmail={setEmail}
          />}
        </Popup>
        
        {/* <svg className={styles.menuIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg> */}
      </div>

    </div>
  );
}

export default Header;

