import axios from './axios';
import Cookies from 'js-cookie';

// const API = 'http://localhost:3000/api'

export const registerRequest = user => axios.post(`/register`, user);

export const loginRequest = async (user) => axios.post(`/login`, user);

export const verifyTokenRequest = async () => axios.get(`/verify`);

export const updateRequest = async (userData) => {
    const token = Cookies.get('token'); // Obtiene el token de las cookies
    return axios.put(`/profile`, userData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};