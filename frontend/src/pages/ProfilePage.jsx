import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';

function ProfilePage() {
    const { isAuthenticated, user, updateUser } = useAuth();
    const [formData, setFormData] = useState(user ? { ...user } : {});
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (user) {
            setFormData({ ...user });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUser(formData);
        setSuccessMessage('Usuario actualizado correctamente');
    };

    return (
        <main>
            <div className="flex flex-col items-center justify-center font-bold text-2xl">
                <h1 className='flex items-center justify-center text-4xl'> Perfil de usuario</h1>
                <br />
                <h1 className='flex items-center justify-center text-2xl'>{user?.nombres} {user?.apellidos}</h1>
            </div>

            <br />
            <div className='flex items-center justify-center'>
                <div className='bg-zinc-800 max-w-md p-10 rounded-md font-bold'>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Registro Académico: {user?.registro_academico}
                            <h1></h1>
                        </label>
                        <label>
                            Nombres:
                            <input type='text' name='nombres' value={formData.nombres || ''} onChange={handleChange} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                            <h1></h1>
                        </label>
                        <label>
                            Apellidos:
                            <input type='text' name='apellidos' value={formData.apellidos || ''} onChange={handleChange} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                            <br />
                        </label>
                        <label>
                            Correo electrónico:
                            <input type='text' name='correo' value={formData.correo || ''} onChange={handleChange} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                        </label>
                        <label>
                            Password:
                            <input type='password' name='password' value={formData.password || ''} onChange={handleChange} className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' />
                        </label>
                        <button type='submit' className='bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded-md h-8 flex items-center justify-center font-bold'>Actualizar usuario</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default ProfilePage;
