import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTasks } from "../context/TaskContext";
import { useEffect } from "react";


function MainUsersPage() {

    const {getTasks, tasks, user} = useTasks()
    // console.log(user)
    useEffect(() => {
        getTasks()
    }, [])


    return (

        <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-900">
            <header>
                <h1 className="text-center font-bold text-4xl">Foro de estudiantes de ingenieria</h1>
                <br></br>
                <div className='flex justify-center'>
                    <p></p>
                    <img
                        src="./resources/fiusac.png"
                        alt="Logo de la Facultad de Ingenieria USAC"
                        className="w-1/4 h-1/4"
                    >

                    </img>
                    <br></br>
                </div>

            </header>
            <div className="text-bold font-bold text-xl">
                <h1>
                    Hola
                </h1>
                <div>
                {
                    tasks.map(task => (
                    <div key={task._id}>
                        <h2>{task.titulo}</h2>
                        <p>{task.descripcion}</p>
                    </div>
                ))  
                }
                </div>
            </div>
        </main>
    )

}

export default MainUsersPage;