import { del, get, post } from './request';

export const postSignup = (name, email, password) =>
  post('api/v1/auth/signup', { name, email, password });

export const postLogin = (email, password) =>
  post('api/v1/auth/login', { email, password });

export const getVerify = () => get('api/v1/auth/verify');

export const deleteUser = (email) => del('api/v1/auth/delete', { email });