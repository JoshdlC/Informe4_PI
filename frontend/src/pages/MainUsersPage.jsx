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
                <Link to={'/tasks'} className='bg-violet-800 px-4 py-1 rounded-md font-bold my-4'>Mis publicaciones</Link>
            </div>
            <div className="flex flex-1 flex-col overflow-y-auto">
                <div className=" flex flex-col justify-center items-center mb-8" >
                    
                    <label htmlFor="categoria" className="font-bold">Ordenar por:</label>
                    <select name="publis" id="ddlViewBy" className="font-semibold bg-blue-900 rounded-md justify-center items-center ">
                        <option value="curso">Curso</option>
                        <option value="catedratico">Catedrático</option>
                        {/* <option value="nombre-curso">Nombre</option>
                        <option value="nombre-catedra">Nombre catedrático</option> */}

                    </select>
                    
                </div>
                
                <div className="flex-1 overflow-y-auto grid grid-cols-4 gap-4 scrollbar-webkit">
                        {
                            tasks.map(task => (
                                <TaskCardForo task={task} key={task._id}/>
                                
                            ))  
                        }    
                        
                </div>
            </div>
            
        </div>
    )

}

export default MainUsersPage;