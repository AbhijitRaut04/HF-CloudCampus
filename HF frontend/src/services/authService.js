import axios from './axiosInstance';

export const login = (credentials) => axios.post('/auth/login', credentials);

export const signup = (signupData) => axios.post('/auth/signup', signupData);
