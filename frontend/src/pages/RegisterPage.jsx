import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"

function RegisterPage() {
    const { register , handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)
        console.log(res);
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
                <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
                
                <h1 className="flex items-center justify-center text-2xl font-bold my-2"> Registrarse </h1>
                <form 
                onSubmit={ onSubmit }
                >
                    <input type='text' {...register('registro_academico', {required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Registro Academico'
                    />
                    <input type='text' {...register('nombres', {required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Nombres'
                    />
                    <input type='text' {...register('apellidos', {required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Apellidos'
                    />
                    <input type='text' {...register('password', {required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Password'
                    />
                    <input type='text' {...register('correo', {required: true})}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        placeholder='Correo'
                    />
                    <button type='submit' className='bg-violet-600 hover:bg-violet-700 active:bg-violet-800 focus:ring
                    focus: ring-violet-500 rounded-md h-8 w-25 flex items-center justify-center font-semibold' >Registrarse</button>
                </form>

                <p className="flex gap-x=2 justify-between">
                        ¿Ya tienes una cuenta? <Link to="/login" className="text-sky-500">Inicia sesion!</Link>
                </p>
                </div>
            </div>  
        </main>
    )
}

export default RegisterPage;