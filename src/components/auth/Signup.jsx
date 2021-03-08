import React, { useState } from 'react';
import { useLogin, useSignup } from '../../state/AuthContext';
import AuthForm from './AuthForm';
import styles from '../reusable/header/styles/Overlay.css';

const Signup = ({ open }) => {
  const signup = useSignup();
  const login = useLogin();
  const [state, setState] = useState('signup');

  const showLogin = () => {
    setState('login');
  };

  const showSignup = () => {
    setState('signup');
  };

  return (
    <div className={styles.popupContainer}> 
      {
        state === 'signup' && (
          <AuthForm 
            title="Signup" 
            signupFn={signup} 
            showLogin={showLogin}
          />
        )}
      {
        state === 'login' && (
          <AuthForm 
            title="Login" 
            loginFn={login} 
            showSignup={showSignup}
          />
        )}
    </div>
  );
};

export default Signup;
