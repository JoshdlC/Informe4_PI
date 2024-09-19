import axios from './axios';

export const getComentariosRequest = () => axios.get('/comentarios');   

export const getComentarioRequest = (_id) => axios.get(`/comentarios/${_id}`);  

export const createComentarioRequest = (comentario) => axios.post("/comentarios", comentario);  

