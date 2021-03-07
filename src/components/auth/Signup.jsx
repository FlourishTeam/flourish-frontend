import React, { useState } from 'react';
import { useLogin, useSignup } from '../../state/AuthContext';
import AuthForm from './AuthForm';
import Login from './Login';

const Signup = () => {
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
    <> 
      {
        state === 'signup' && (
          <AuthForm 
            title="Signup" 
            authFn={signup} 
            showLogin={showLogin}
          />
        )}
      {
        state === 'login' && (
          <AuthForm 
            title="Login" 
            authFn={login} 
            showSignup={showSignup}
          />
        )}
    </>
  );
};

export default Signup;
