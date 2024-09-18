import {createContext, useContext, useState} from 'react';
import {getCursosRequest, getCursoRequest} from '../api/curso';

export const CursoContext = createContext();

export const useCursos = () => {
    const context = useContext(CursoContext);
    if (!context) {
        throw new Error('useCursos must be used within a CursoProvider')
    }
    return context
}

export const CursoProvider = ({children}) => {
    const [cursos, setCursos] = useState([]);

    const [loading, setLoading] = useState(true);

    const getCursos = async () => {
        try {
            const res = await getCursosRequest();
            setCursos(res.data);
        } catch (error) {
            console.log(error)
        }
    }


    const getCurso = async (id) => {
        try {
            const res = await getCursoRequest(id);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <CursoContext.Provider value={{
            cursos,
            getCursos,
            getCurso,
        }}>
            {children}
        </CursoContext.Provider>
    );
}