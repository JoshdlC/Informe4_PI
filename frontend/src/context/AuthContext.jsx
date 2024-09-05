import {createContext, useContext, useState, useEffect} from 'react';
import { registerRequest, loginRequest } from '../api/auth';
import { set } from 'react-hook-form';


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

    useEffect(() => {
        if (errors.length > 0) {
          const timer = setTimeout(() => {
            setErrors([]);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [errors]);

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            console.log(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data.errors);
        }
    };

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            console.log(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data);
        }
    
    }
    return (
        <AuthContext.Provider 
        value={{
            signUp, 
            signIn, 
            user, 
            isAuthenticated, 
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}