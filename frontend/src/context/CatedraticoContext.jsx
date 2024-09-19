import {createContext, useContext, useState} from 'react';
import {getCatedraticosRequest, getCatedraticoRequest} from '../api/catedratico';

export const CatedraticoContext = createContext();

export const useCatedraticos = () => {
    const context = useContext(CatedraticoContext);
    if (!context) {
        throw new Error('useCatedraticos must be used within a CatedraticoProvider')
    }
    return context
}


export const CatedraticoProvider = ({children}) => {
    const [catedraticos, setCatedraticos] = useState([]);

    const [loading, setLoading] = useState(true);

    const getCatedraticos = async () => {
        try {
            const res = await getCatedraticosRequest();
            setCatedraticos(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getCatedratico = async (id) => {
        try {
            const res = await getCatedraticoRequest(id);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CatedraticoContext.Provider value={{
            catedraticos,
            getCatedraticos,
            getCatedratico,
        }}>
            {children}
        </CatedraticoContext.Provider>
    );


}

