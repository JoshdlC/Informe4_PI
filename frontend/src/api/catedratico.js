import axios from './axios';

export const getCatedraticosRequest = () => axios.get('/catedraticos');

export const getCatedraticoRequest = (id) => axios.get(`/catedraticos/${id}`);  