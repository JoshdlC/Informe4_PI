import {useEffect} from 'react'
import { useTasks } from '../context/TaskContext';


//! ESTE COMPONENTE NO SE USA, SOLO ES DE PRUEBA
function TasksPage() {


    const {getTasks, tasks} = useTasks()
    useEffect(() => {
        getTasks()
    }, []);

    if (tasks.length === 0) {
        return (<h1>No hay tareas</h1>)
    };

  return (
    <div>
    {
        tasks.map(task => (
            <div key={task._id}>
                <h2>{task.curso}</h2>
                <p>{task.mensaje}</p>
            </div>
        ))  
    }
    </div>
  )
}

export default TasksPage