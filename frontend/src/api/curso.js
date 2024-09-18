import axios from './axios';

export const getCursosRequest = () => axios.get('/cursos');

export const getCursoRequest = (id) => axios.get(`/cursos/${id}`);


