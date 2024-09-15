import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";
import { useEffect } from "react";
import TaskCardForo from '../components/TaskCardForo';


function MainUsersPage() {

    const {getTasks, tasks, user} = useTasks()
    // console.log(user)
    useEffect(() => {
        getTasks()
    }, [])

    if (tasks.length === 0) {
        return (<h1>No hay tareas</h1>)
    };


    return (

        <main className="h-screen flex flex-col justify-center items-center ">
            <header>
                <h1 className="text-center font-bold text-4xl">Foro de estudiantes de ingenieria</h1>
                <br></br>
                <div className='flex justify-center'>
                    <p></p>
                    <img
                        src="./resources/Usac_logo.png"
                        alt="Logo de la Facultad de Ingenieria USAC"
                        className="w-1/4 h-1/4"
                    >

                    </img>
                    <br></br>
                </div>

            </header>
            <div className="text-bold font-bold text-xl my-10">
                
                <div>
                <Link to={'/tasks'} className='bg-violet-500 px-4 py-1 rounded-md font-bold my-10'>Mis publicaciones</Link>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                    {
                    tasks.map(task => (
                        <TaskCardForo task={task} key={task._id}/>
                        
                    ))  
                    
                    }    
                       
            </div>
        </main>
    )

}

export default MainUsersPage;