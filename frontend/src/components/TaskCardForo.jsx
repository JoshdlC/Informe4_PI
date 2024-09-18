import React from 'react'
import { useTasks } from '../context/TaskContext'
import { Link } from 'react-router-dom';

function TaskCardForo({task}) {


    const {deleteTask} = useTasks();
    
  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
        <header className='flex justify-between'>
            <h1 className='text-2xl font-bold'>{task.curso}</h1>
            <div className='flex gap-2 items-center'>
                <button onClick={() =>
                    deleteTask(task._id)
                }
                className='bg-violet-600 hover:bg-violet-700 active:bg-violet-800 focus:ring rounded-md px-4 py-2 '
                >Comentar</button>
                
            </div>
        </header>
        
        <p className='text-slate-300'>{task.mensaje}</p>
        <p className='text-slate-300'>{new Date(task.date).toLocaleDateString()}</p>
    </div>
  )
}

export default TaskCardForo