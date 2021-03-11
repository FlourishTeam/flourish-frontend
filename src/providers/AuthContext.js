import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  deleteUser,
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
      .then(() => history.push('/'))
      .then(console.log('CONTEXT', name, email, password))
      .catch((err) => setError(err));
  };

  const login = (email, password) => {
    return postLogin(email, password)
      .then((user) => setSession(user))
      .then(() => history.push('/'))
      .catch((err) => setError(err));
  };

  const deleteUser = (email) => {
    return deleteUser(email)
      .then(() => history.push('/'))
      .catch((err) => setError(err));
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
        deleteUser,
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

export const useDeleteUser = () => {
  const { deleteUser } = useContext(AuthContext);
  return deleteUser;
};