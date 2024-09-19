import {useEffect} from 'react'
import { useTasks } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';
import { useAuth } from '../context/AuthContext';


// ESTE COMPONENTE NO SE USA, SOLO ES DE PRUEBA
function TasksPage() {


    const {getTasks, tasks} = useTasks()
    const {user} = useAuth();

    useEffect(() => {
        getTasks().then(() => console.log(tasks));
        
    }, []);
    // console.log(user.registro_academico)
    // console.log(tasks.usuario)
    // const userTasks = tasks.filter(task => task.usuario.toString() === user._id);
    // console.log(userTasks);

    if (tasks.length === 0) {
        return (<h1>No hay tareas para mostrar en este usuario...</h1>)
    };

  return (
    <div className='grid grid-cols-3 gap-2'>
    {
        tasks.map(task => (
            <TaskCard task={task} key={task._id}/>
        ))  
    }
    </div>
  );
}

export default TasksPage