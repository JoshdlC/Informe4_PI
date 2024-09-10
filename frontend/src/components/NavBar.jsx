import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function NavBar() {

  const {isAuthenticated, logout, user} = useAuth();
  console.log(user)


  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-4 px-10 rounded-lg">
      <Link to='/'>
        <h1 className="text-2xl font-bold">Task manager</h1>
      </Link>
        
        <ul className="flex gap-x-2">

            {isAuthenticated ? (
              <>
              <li className='font-bold'>
                Bienvenido {user.nombres} {user.apellidos}!
              </li>
              <li>
                <Link to={'/profile'} className='bg-violet-500 px-4 py-1 rounded-sm font-bold my-2'>
                  Perfil de usuario
                </Link>
              </li>
              <li>
                <Link to={'/nuevaPub'} className='bg-violet-500 px-4 py-1 rounded-sm font-bold my-2'>
                  Añade una publicacion
                </Link>
              </li>
              <li>
                <Link to={'/'} onClick={() => logout()}
                className='bg-red-600 px-4 py-1 rounded-sm font-bold my-2'>
                  Cerrar sesión
                </Link>
              </li>
              
              </>
            ) : (

              <>
              <li>
                <Link to={'/login'} className='bg-violet-500 px-4 py-1 rounded-sm font-bold' >
                  Iniciar sesion
                </Link>
              </li>
              <li>
                <Link to={'/register'} className='bg-violet-500 px-4 py-1 rounded-sm font-bold'>
                  Registrarse
                </Link>
              </li>
              </>
            )}
        </ul>
    </nav>
  )
}

export default NavBar