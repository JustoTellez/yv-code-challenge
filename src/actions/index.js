import axios from 'axios';

const API_URL = 'http://localhost:9002/api';

export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

export const fetchUser = ({ username, password }) => ({
  type: LOGIN,
  payload: axios.post(`${API_URL}/user/login`, { username, password })
});

export const postUser = ({ username, password }) => ({
  type: SIGNUP,
  payload: axios.post(`${API_URL}/user/signup`, { username, password })
});
