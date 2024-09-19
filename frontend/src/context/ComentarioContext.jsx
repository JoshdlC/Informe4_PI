import { createContext, useState, useContext } from 'react';
import { getComentariosRequest, getComentarioRequest, createComentarioRequest } from '../api/comentarios';

export const ComentarioContext = createContext();

export const useComentarios = () => {
    const context = useContext(ComentarioContext);
    if (!context) {
        throw new Error('useComentarios must be used within a ComentarioProvider')
    }
    return context
}

export const ComentarioProvider = ({children}) => {
    const [comentarios, setComentarios] = useState([]);

    const [loading, setLoading] = useState(true);

    const getComentarios = async () => {
        try {
            const res = await getComentariosRequest();
            setComentarios(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getComentario = async (_id) => {
        try {
            const res = await getComentarioRequest(_id);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }

    const createComentario = async (comentario) => {
        try {
            const res = await createComentarioRequest(comentario);
            setComentarios([...comentarios, res.data]);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ComentarioContext.Provider value={{comentarios, getComentarios, getComentario, createComentario}}>
            {children}
        </ComentarioContext.Provider>
    )
}   