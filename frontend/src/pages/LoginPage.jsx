import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ShowPasswordIcon from "/resources/eye-password-show.svg";
import HidePasswordIcon from "/resources/eye-password-hide.svg";

function LoginPage() {
    
    const { register, handleSubmit, formState: {errors}} = useForm()

    const { signIn, errors:signInErrors, isAuthenticated } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        signIn(data);
        
    });

    useEffect(() => {
        if (isAuthenticated) {
          navigate("/foro")
        };
      }, [isAuthenticated]);

      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      }
      //<main className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}></main>

    return (
        <main className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center" style={{backgroundImage: "url('./resources/fiusac03.jpg')"} }>
            <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
            <div className="relative z-10 flex items-center justify-center w-full h-full">

                <header>
                    <br></br>
                    {/* <Link to = '/'>
                        <button className="bg-green-600 hover:bg-green-700 active:bg-green-800
                        focus:ring focus:ring-green-500 rounded-md  font-semibold py-2 px-4 text-lg">
                            Volver
                        </button>
                    </Link> */}
                </header>  
                <div className="flex h-[calc(100vh-100px)] items-center justify-center z-10">
                    
                    <div className="bg-zinc-800 max-w-xl w-full p-10 rounded-xl relative"> 
                        {/* <h1>xd</h1> */}
        
                        {
                            signInErrors.map((error, index) => (
                            <div className="bg-red-500 p-2 text-white text-center " key={index}>
                                {error}
                            </div>
                            ))
                        }

                        <h1 className="flex items-center justify-center text-2xl font-bold my-2"> Inicio de sesion</h1>

                        <form onSubmit={onSubmit}>
                            <input type="text"  { ... register("registro_academico", { required: true })}  
                            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
                            placeholder="Registro academico"
                            />
                            {
                                errors.registro && (
                                <p className="text-red-500">Usuario y/o constraseña incorrectos</p>
                            )}

                            <div className="relative">
                                <input type={showPassword ? "text":"password"} {... register("password", {required: true})} 
                                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
                                placeholder="Password"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    <img
                                        src={showPassword ? HidePasswordIcon : ShowPasswordIcon}
                                        alt={showPassword ? "Hide password" : "Show password"}
                                        className="h-5 w-5"
                                    />
                                </button>
                            </div>
                            
                            {
                                errors.password && (
                                <p className="text-red-500">Usuario y/o constraseña incorrectos</p>
                            )}

                            
                            <button type="submit" className="bg-violet-600 hover:bg-violet-700 active:bg-violet-800
                            focus:ring focus:ring-violet-500 rounded-md  h-8 w-50 flex items-center justify-center
                            font-semibold">
                                Iniciar sesion
                            </button>

                        </form>

                        <p className="flex gap-x=2 justify-between">
                            ¿No tienes una cuenta? <Link to="/register" className="text-sky-500">Registrate!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginPage