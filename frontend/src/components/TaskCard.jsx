import React from 'react'
import { useTasks } from '../context/TaskContext'
import { Link } from 'react-router-dom';

function TaskCard({task}) {


    const {deleteTask} = useTasks();
  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
            <h1 className='text-2xl font-bold'>{task.curso}</h1>
            <div className='flex gap-2 items-center'>
                <button onClick={() =>
                    deleteTask(task._id)
                }>Borrar</button>
                <Link to={`/tasks/${task._id}`}>Editar</Link>
            </div>
        </header>
        <p className='text-slate-300'>{task.mensaje}</p>
        <p className='text-slate-300'>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCard