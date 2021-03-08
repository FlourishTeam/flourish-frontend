import { get, post } from './request';

export const postSignup = (name, email, password) =>
  post('/api/v1/signup', { name, email, password })
    .then(console.log('POSTSIGNUP', name, email, password));

export const postLogin = (email, password) =>
  post('/api/v1/login', { email, password });

export const getVerify = () => get('api/v1/verify');
