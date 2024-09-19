import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";
import { useEffect, useState } from "react";
import TaskCardForo from '../components/TaskCardForo';

function MainUsersPage() {
    const { getTasks, tasks } = useTasks();
    const [filter, setFilter] = useState('');
    const [isCategoryFilter, setIsCategoryFilter] = useState(true); // true: filtrar por categoría

    useEffect(() => {
        getTasks();
    }, []);

    // Filtrar tareas basado en el valor del input y el modo de filtrado seleccionado
    const filteredTasks = tasks.filter(task => {
        const lowerCaseFilter = filter.toLowerCase();
        if (isCategoryFilter) {
            return task.curso.toLowerCase().includes(lowerCaseFilter);
        } else {
            return task.mensaje.toLowerCase().includes(lowerCaseFilter); // Asumimos que "mensaje" es el catedrático
        }
    });

    return (
        <div className="pt-16 pb-8 px-4 flex flex-col items-center h-screen">
            <header className="text-center mb-6">
                <h1 className="text-center font-bold text-4xl">Foro de estudiantes de ingeniería</h1>
                <div className='flex justify-center my-4'>
                    <img
                        src="./resources/Usac_logo.png"
                        alt="Logo de la Facultad de Ingeniería USAC"
                        className="w-1/4 h-auto"
                    />
                </div>
            </header>

            <div className="mb-8">
                <Link to={'/tasks'} className='bg-violet-800 px-4 py-1 rounded-md font-bold my-4'>Mis publicaciones</Link>
            </div>
            
            <div className="flex flex-1 flex-col overflow-y-auto">
                <div className="flex flex-col justify-center items-center mb-8">
                    <div className="flex gap-4 mb-4">
                        <button
                            onClick={() => setIsCategoryFilter(true)}
                            className={`px-4 py-2 rounded ${isCategoryFilter ? 'bg-violet-600 text-white' : 'bg-violet-400'}`}
                        >
                            Filtrar por Curso
                        </button>
                        <button
                            onClick={() => setIsCategoryFilter(false)}
                            className={`px-4 py-2 rounded ${!isCategoryFilter ? 'bg-violet-600 text-white' : 'bg-violet-400'}`}
                        >
                            Filtrar por Catedrático
                        </button>
                    </div>
                    <label htmlFor="filter" className="font-bold">Filtrar:</label>
                    <input
                        type="text"
                        id="filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="font-semibold bg-blue-900 rounded-md my-2 p-2"
                        placeholder={isCategoryFilter ? "Ingresa el nombre del curso" : "Ingresa el nombre del catedrático"}
                    />
                </div>
                
                <div className="flex-1 overflow-y-auto grid grid-cols-4 gap-4 scrollbar-webkit">
                    {
                        filteredTasks.map(task => (
                            <TaskCardForo task={task} key={task._id} />
                        ))
                    }    
                </div>
            </div>
        </div>
    );
}

export default MainUsersPage;
