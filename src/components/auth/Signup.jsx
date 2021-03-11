import React, { useState } from 'react';
import { useLogin, useSignup } from '../../providers/AuthContext';
import AuthForm from './AuthForm';
import styles from '../reusable/navmenu/styles/Overlay.css';

const Signup = ({ name, email, setName, setEmail }) => {
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
    <div className={styles.Signup}>
      {state === 'signup' && (
        <AuthForm
          title="Sign Up"
          signupFn={signup}
          showLogin={showLogin}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
        />
      )}
      {state === 'login' && (
        <AuthForm
          title="Log In"
          loginFn={login}
          showSignup={showSignup}
          email={email}
          setEmail={setEmail}
        />
      )}
    </div>
  );
};

export default Signup;
