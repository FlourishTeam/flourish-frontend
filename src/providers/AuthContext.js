import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  getLogout,
  getVerify,
  postLogin,
  postSignup,
} from '../services/fetches/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [signupError, setSignupError] = useState(null);
  const isAuthenticated = !!session;

  useEffect(() => {
    getVerify()
      .then((user) => setSession(user))
      .catch(() => console.log('user not logged in'))
      .finally(() => setLoading(false));
  }, []);
  
  const signup = (name, email, password) => {
    return postSignup(name, email, password)
      .then((user) => setSession(user))
      .catch((err) => setSignupError(err));
  };

  const login = (email, password) => {
    return postLogin(email, password)
      .then((user) => setSession(user))
      .catch((err) => setError(err));
  };

  const logout = () => {
    return getLogout()
      .then(() => {
        setSession(null);
        history.push('/');
      });
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        loading,
        error,
        isAuthenticated,
        signup,
        login,
        logout,
        signupError
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => {
  const { session } = useContext(AuthContext);
  return session;
};

export const useAuthLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};

export const useAuthError = () => {
  const { error } = useContext(AuthContext);
  return error;
};

export const useSignupError = () => {
  const { signupError } = useContext(AuthContext);
  return signupError;
};

export const useIsAuthenticated = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated;
};

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

export const useLogout = () => {
  const { logout } = useContext(AuthContext);
  return logout;
};
