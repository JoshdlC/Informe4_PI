import {createContext, useContext, useState, useEffect} from 'react';
import { registerRequest, loginRequest, verifyTokenRequest, updateRequest } from '../api/auth';
import { set } from 'react-hook-form';
import Cookies from 'js-cookie';



export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const logout = () => {
        Cookies.remove('token');
        setIsAuthenticated(false);
        setUser(null);
    }

    //* si hay error
    useEffect(() => {
        if (errors.length > 0) {
          const timer = setTimeout(() => {
            setErrors([]);
          }, 7500);
          return () => clearTimeout(timer);
        }
      }, [errors]);
    
      //* ver si manda la cookie
    useEffect(() => {
        const checkLogin = async () => {
            const token = Cookies.get()
            console.log(token);
            if (!token){
                setIsAuthenticated(false);
                setLoading(false);
                return             
            }
            try {
                const res = await verifyTokenRequest(token)
                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false);
                    return
                } 
                setIsAuthenticated(true);
                setUser(res.data); 
                setLoading(false);
            } catch (error) {
                console.log(error)
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }         
        }
        checkLogin();
    }, []);


    const signUp = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            console.log(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data);
        }
    };

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            console.log(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            console.log(error.response.data);
            setErrors([error.response.data.message]);
        }
    
    };

    const updateUser = async (userData) => {

        try {
            const res = await updateRequest(userData);
            setUser(res.data);

            
            
        } catch (error) {
            console.log(error)
            if (error.response && error.response.data) {
                setErrors([error.response.data.message]);
            } else {
                setErrors(['Error desconocido']);
            }
        }
    }

    

    
    return (
        <AuthContext.Provider 
        value={{
            signUp, 
            signIn, 
            logout,
            updateUser,
            loading,
            user, 
            isAuthenticated, 
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
}