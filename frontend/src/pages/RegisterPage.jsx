import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

function RegisterPage() {

  const { register, handleSubmit, formState: {
    errors
  } } = useForm()
  const {signUp, isAuthenticated, errors:registerErrors} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) navigate('/perfil')
  }, [isAuthenticated])

    
  const onSubmit = handleSubmit(async (values) => {
          console.log(values);
          signUp(values);
        })

  return (
    <main>
        <header>
            <br></br>
            <Link to = '/'>
                <button className="bg-green-600 hover:bg-green-700 active:bg-green-800
                focus:ring focus:ring-green-500 rounded-md  font-semibold py-2 px-4 text-lg">
                    Volver
                </button>
            </Link>
        </header>  

        <div className="flex h-[calc(100vh-50px)] items-center justify-center  ">
            
            <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md"> 
                {
                    registerErrors.map((error, index) => (
                    <div className="bg-red-500 p-2 text-white " key={index}>
                        {error}
                    </div>
                    ))
                }
                <h1 className="flex items-center justify-center text-2xl font-bold my-2"> Registrarse </h1>
                <form onSubmit={onSubmit}>
                    <input type="text"  { ... register("registro", { required: true })}  
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
                    placeholder="Registro academico"
                    />
                    {
                        errors.registro && (
                        <p className="text-red-500">Registro academico es requerido</p>
                    )}

                    <input type="text"  { ... register("nombres", { required: true })}  
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
                    placeholder="Nombres "
                    />
                    {
                        errors.nombres && (
                        <p className="text-red-500">Sus nombres son requeridos</p>
                    )}
                    <input type="text"  { ... register("apellidos", { required: true })}  
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
                    placeholder="Apellidos"
                    />
                    {
                        errors.apellidos && (
                        <p className="text-red-500">Sus apellidos son requeridos</p>
                    )}

                    <input type="password" {... register("password", {required: true})} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
                    placeholder="Password"
                    />
                    {
                        errors.password && (
                        <p className="text-red-500">La password es requerida</p>
                    )}

                    <input type="email" { ... register("email", { required: true })} 
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2 "
                    placeholder="Correo Electronico"
                    />
                    {
                        errors.email && (
                        <p className="text-red-500">El correo es requerido</p>
                    )}
                    
                    <button type="submit" className="bg-violet-600 hover:bg-violet-700 active:bg-violet-800
                    focus:ring focus:ring-violet-500 rounded-md  h-8 w-25 flex items-center justify-center font-semibold">
                        Registrarse
                    </button>

                </form>

                <p className="flex gap-x=2 justify-between">
                        ¿Ya tienes una cuenta? <Link to="/login" className="text-sky-500">Inicia sesion!</Link>
                </p>
            </div>  
                    
        </div>
        
    </main>
  );
}

export default RegisterPage