import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";
import { useEffect, useState } from "react";
import TaskCardForo from '../components/TaskCardForo';


function MainUsersPage() {

    const {getTasks, tasks, user} = useTasks();
    const [filter, setFilter] = useState('');
    const [isCategoryFilter, setIsCategoryFilter] = useState('curso'); // por defecto a "curso"
    
    // console.log(user)
    useEffect(() => {
        getTasks()
    }, [])

    // * Filtro 
    const filteredTasks = tasks.filter(task => {
        const lowerCaseFilter = filter.toLowerCase();
        if (isCategoryFilter === 'curso') {
            return task.curso.toLowerCase().includes(lowerCaseFilter);
        } else {
            return task.curso.toLowerCase().includes(lowerCaseFilter); // Asumimos que "mensaje" es el catedrático
        }
    });

    // var e = document.getElementById("ddlViewBy");
    // function onChange(){
    //     var value = e.value;
    //     var text = e.options[e.selectedIndex].text;
    //     console.log(value, text);

    // }

    // e.onChange = onChange;
    // onChange();


    return (

        <div className="pt-16 pb-8 px-4 flex flex-col items-center h-screen ">
            <header className="text-center mb-6">
                <h1 className="text-center font-bold text-4xl">Foro de estudiantes de ingenieria</h1>

                <div className='flex justify-center my-4'>
                    <img
                        src="./resources/Usac_logo.png"
                        alt="Logo de la Facultad de Ingenieria USAC"
                        className="w-1/4 h-auto"
                    />

                </div>
            </header>

            <div className="mb-8">
                <Link to={'/tasks'} className='bg-violet-800 px-8 py-4 rounded-md font-bold my-4 text-xl'>Mis publicaciones</Link>
            </div>
            <br></br>
            <div className="flex flex-1 flex-col overflow-y-auto">
                <div className="flex flex-col justify-center items-center mb-8 scrollbar-webkit ">
                    <div className="flex gap-4 mb-4 scrollbar-webkit">
                        <button
                            onClick={() => setIsCategoryFilter(true)}
                            className={`px-2 py-1 rounded ${isCategoryFilter ? 'bg-blue-900 text-white font-bold' : 'bg-blue-400'}`}
                        >
                            Filtrar por Curso
                        </button>
                        <button
                            onClick={() => setIsCategoryFilter(false)}
                            className={`px-2 py-1 rounded ${!isCategoryFilter ? 'bg-blue-900 text-white font-bold' : 'bg-blue-400' }`}
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
                        className=" bg-blue-900 rounded-md my-2 p-2"
                        placeholder={isCategoryFilter ? "Ingresa el nombre del curso" : "Ingresa el nombre del catedrático"}
                    />
                </div>
                
                <div className="flex-1 overflow-y-auto grid grid-cols-2 gap-4 scrollbar-webkit min-h-[600px]">
                    {
                        filteredTasks.map(task => (
                            <TaskCardForo task={task} key={task._id} />
                        ))
                    }    
                </div>
            </div>
            
        </div>
    )

}

export default MainUsersPage;